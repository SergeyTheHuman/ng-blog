import { InjectionToken } from '@angular/core'
import { INotifications } from '@src/app/shared/services/notifications/notifications.interface'
import { TuiNotification } from '@taiga-ui/core'

export const NOTIFICATIONS_TOKEN = new InjectionToken('ISV_NOTIFICATIONS')

export const notificationsMap: INotifications = {
	EMAIL_NOT_FOUND: {
		text: 'Email not found',
		type: TuiNotification.Error,
		label: 'Error!',
	},
	INVALID_PASSWORD: {
		text: 'This password is invalid',
		type: TuiNotification.Error,
		label: 'Error!',
	},
	LOGIN_FAILED: {
		text: 'Your session expired. You have to login again',
		type: TuiNotification.Warning,
		label: 'Oops!',
	},
	401: {
		text: 'Unauthorized!',
		type: TuiNotification.Error,
		label: 'Error!',
	},
}
