import { InjectionToken } from '@angular/core'
import { IErrors } from '@src/app/shared/services/errors/errors.interface'

export const ERRORS_TOKEN = new InjectionToken('ERRORS_MESSAGES')
export const errorsMap: IErrors = {
	EMAIL_NOT_FOUND: 'Email not found',
	INVALID_PASSWORD: 'This password is invalid',
}
