import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IFireBaseAuthResponse } from '@src/app/admin/shared/interfaces/firebase-auth.interface'
import { IUser } from '@src/app/admin/shared/interfaces/user.interface'
import { NotificationsService } from '@src/app/shared/services/notifications/notifications.service'
import { environment } from '@src/environments/environment'
import { catchError, EMPTY, Observable, of, tap } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
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

	get isAuthentificated(): Observable<boolean> {
		return of(!!this.token)
	}

	constructor(
		private readonly http: HttpClient,
		private readonly notificationService: NotificationsService,
	) {}

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
					this.notificationService.showNotification(
						error.error.error.message,
					)
					return EMPTY
				}),
			)
	}

	logout() {
		this.setToken(null)
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
