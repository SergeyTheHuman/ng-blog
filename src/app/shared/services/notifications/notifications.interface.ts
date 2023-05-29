import { TuiNotification } from '@taiga-ui/core'

export interface INotifications {
	[key: string]: INotification
}

export interface INotification {
	text: string
	type: TuiNotification
	label: string
}
