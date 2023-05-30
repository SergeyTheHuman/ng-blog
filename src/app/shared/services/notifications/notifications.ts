import { InjectionToken } from '@angular/core'
import { INotifications } from '@src/app/shared/services/notifications/notifications.interface'
import { TuiNotification } from '@taiga-ui/core'

export const NOTIFICATIONS_TOKEN = new InjectionToken('ISV_NOTIFICATIONS')

export enum notifications {
	EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
	INVALID_PASSWORD = 'INVALID_PASSWORD',
	LOGIN_FAILED = 'LOGIN_FAILED',
	UNAUTHORIZED = 'UNAUTHORIZED',
	CREATE_SUCCESS = 'CREATE_SUCCESS',
	EDIT_SUCCESS = 'EDIT_SUCCESS',
}

export const notificationsMap: INotifications = {
	[notifications.EMAIL_NOT_FOUND]: {
		text: 'Email not found',
		type: TuiNotification.Error,
		label: 'Error!',
	},
	[notifications.INVALID_PASSWORD]: {
		text: 'This password is invalid',
		type: TuiNotification.Error,
		label: 'Error!',
	},
	[notifications.LOGIN_FAILED]: {
		text: 'Your session expired. You have to login again',
		type: TuiNotification.Warning,
		label: 'Oops!',
	},
	[notifications.UNAUTHORIZED]: {
		text: 'Unauthorized!',
		type: TuiNotification.Error,
		label: 'Error!',
	},
	[notifications.EDIT_SUCCESS]: {
		text: 'Editing was successful',
		type: TuiNotification.Success,
		label: 'Success!',
	},
	[notifications.CREATE_SUCCESS]: {
		text: 'Creating was successful',
		type: TuiNotification.Success,
		label: 'Success!',
	},
	401: {
		text: 'Unauthorized!',
		type: TuiNotification.Error,
		label: 'Error!',
	},
}
