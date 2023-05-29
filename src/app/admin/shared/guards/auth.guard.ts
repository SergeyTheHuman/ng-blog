import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '@src/app/admin/shared/services/auth.service'
import { tap } from 'rxjs'

export const authGuard: CanActivateFn = () => {
	const router = inject(Router)
	const authService = inject(AuthService)

	return authService.isAuthentificated.pipe(
		tap((isAuth) => {
			if (isAuth) {
				return true
			} else {
				authService.logout()
				router.navigate(['admin', 'login'], {
					queryParams: {
						loginFailed: true,
					},
				})
				return false
			}
		}),
	)
}
