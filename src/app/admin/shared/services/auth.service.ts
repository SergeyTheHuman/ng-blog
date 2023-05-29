import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { IFireBaseAuthResponse } from '@src/app/admin/shared/interfaces/firebase-auth.interface'
import { IUser } from '@src/app/admin/shared/interfaces/user.interface'
import { ErrorsService } from '@src/app/shared/services/errors/errors.service'
import { environment } from '@src/environments/environment'
import { TuiAlertService, TuiNotification } from '@taiga-ui/core'
import { catchError, EMPTY, Observable, tap } from 'rxjs'

@Injectable()
export class AuthService {
	get token(): string | null {
		const expiresDateStr: string =
			localStorage.getItem('firebase-token-expires') || ''
		let expiresDate: Date

		if (expiresDateStr) {
			expiresDate = new Date(expiresDateStr)

			if (new Date() > expiresDate) {
				this.logout()
				return null
			}
		}

		return localStorage.getItem('firebase-token')
	}

	constructor(
		private readonly http: HttpClient,
		private readonly errorsService: ErrorsService,
		@Inject(TuiAlertService) private readonly alerts: TuiAlertService,
	) {}

	showNotification(error: string): void {
		const message = this.errorsService.getMessage(error)

		this.alerts
			.open(`<strong>${message}</strong>`, {
				label: 'Error!',
				status: TuiNotification.Error,
				autoClose: true,
			})
			.subscribe()
	}

	login(
		user: IUser & { returnSecureToken?: boolean },
	): Observable<IFireBaseAuthResponse> {
		user.returnSecureToken = true

		return this.http
			.post<IFireBaseAuthResponse>(
				`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
				user,
			)
			.pipe(
				tap(this.setToken),
				catchError((error) => {
					this.showNotification(error.error.error.message)
					return EMPTY
				}),
			)
	}

	logout() {
		this.setToken(null)
	}

	isAuthentificated() {
		return !!this.token
	}

	private setToken(response: null): void
	private setToken(response: IFireBaseAuthResponse): void
	private setToken(response: IFireBaseAuthResponse | null): void {
		if (response === null) return localStorage.clear()

		const expiresDate: Date = new Date(
			new Date().getTime() + +response.expiresIn * 1000,
		)
		localStorage.setItem('firebase-token', response.idToken)
		localStorage.setItem('firebase-token-expires', expiresDate.toString())
	}
}
