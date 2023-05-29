import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@src/app/admin/shared/services/auth.service'
import { NotificationsService } from '@src/app/shared/services/notifications/notifications.service'
import { catchError, Observable, throwError } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private readonly notificationsService: NotificationsService,
	) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		this.authService.isAuthentificated.subscribe((isAuth) => {
			if (isAuth) {
				request = request.clone({
					setParams: {
						auth: this.authService.token as string,
					},
				})
			}
		})
		return next.handle(request).pipe(
			catchError((error) => {
				if (error.status === 401) {
					this.authService.logout()
					this.router.navigate(['admin', 'login'], {
						queryParams: {
							LOGIN_FAILED: true,
						},
					})
					this.notificationsService.showNotification(error.status)
				}

				return throwError(() => error)
			}),
		)
	}
}

// import {
// 	HttpEvent,
// 	HttpEventType,
// 	HttpHandler,
// 	HttpInterceptor,
// 	HttpRequest,
// } from '@angular/common/http'
// import { Injectable } from '@angular/core'
// import { Observable, tap } from 'rxjs'

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
// 	intercept(
// 		req: HttpRequest<any>,
// 		next: HttpHandler,
// 	): Observable<HttpEvent<any>> {
// 		console.log('Intercepted request >>> ', req)

// 		const cloned = req.clone({
// 			headers: req.headers.append('Auth', 'Bearer super_kinder_penguin'),
// 		})

// 		return next.handle(cloned).pipe(
// 			tap((event) => {
// 				if (event.type === HttpEventType.Response)
// 					console.log('Intercepted response >>> ', event)
// 			}),
// 		)
// 	}
// }
