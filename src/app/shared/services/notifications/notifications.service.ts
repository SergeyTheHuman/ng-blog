import { Inject, Injectable } from '@angular/core'
import {
	notificationsMap,
	NOTIFICATIONS_TOKEN,
} from '@src/app/shared/services/notifications/notifications'
import { INotification } from '@src/app/shared/services/notifications/notifications.interface'
import { TuiAlertService, TuiNotification } from '@taiga-ui/core'

@Injectable()
export class NotificationsService {
	defaultNotification: INotification = {
		text: '',
		type: TuiNotification.Error,
		label: 'Error!',
	}

	constructor(
		@Inject(NOTIFICATIONS_TOKEN)
		private readonly notifications: typeof notificationsMap,
		@Inject(TuiAlertService) private readonly alerts: TuiAlertService,
	) {}

	private getNotification(key: string): INotification {
		return this.notifications[key] || this.defaultNotification
	}

	showNotification(key: string) {
		const notification = this.getNotification(key)

		this.alerts
			.open(`<strong>${notification.text}</strong>`, {
				label: notification.label,
				status: notification.type,
				autoClose: true,
			})
			.subscribe()
	}
}
