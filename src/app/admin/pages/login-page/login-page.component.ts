import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { IUser } from '@src/app/admin/shared/interfaces/user.interface'
import { AuthService } from '@src/app/admin/shared/services/auth.service'
import { NotificationsService } from '@src/app/shared/services/notifications/notifications.service'
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit'
import { finalize, of, Subject, takeUntil } from 'rxjs'

@Component({
	selector: 'isv-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
	providers: [
		{
			provide: TUI_VALIDATION_ERRORS,
			useValue: {
				required: 'Can not be empty!',
				email: 'Enter a valid email',
				maxlength: ({ requiredLength }: { requiredLength: string }) =>
					`Maximum length — ${requiredLength}`,
				minlength: ({ requiredLength }: { requiredLength: string }) =>
					of(`Minimum length — ${requiredLength}`),
			},
		},
	],
})
export class LoginPageComponent implements OnInit {
	destroy$: Subject<string> = new Subject()
	form!: FormGroup
	loading: boolean = false

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private readonly route: ActivatedRoute,
		private readonly notificationsService: NotificationsService,
	) {}

	ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.email,
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		})

		this.route.queryParams
			.pipe(takeUntil(this.destroy$))
			.subscribe((params) => {
				if (params['loginFailed']) {
					this.notificationsService.showNotification('LOGIN_FAILED')
				}
			})
	}

	submit() {
		if (this.form.invalid) return

		const user: IUser = this.form.value
		this.loading = true

		this.authService
			.login(user)
			.pipe(
				takeUntil(this.destroy$),
				finalize(() => (this.loading = false)),
			)
			.subscribe((result) => {
				this.form.reset()
				this.router.navigate(['admin', 'dashboard'])
			})
	}
}
