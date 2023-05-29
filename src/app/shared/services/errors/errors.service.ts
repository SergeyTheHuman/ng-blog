import { Inject, Injectable } from '@angular/core'
import { errorsMap, ERRORS_TOKEN } from '@src/app/shared/services/errors/errors'

@Injectable()
export class ErrorsService {
	constructor(
		@Inject(ERRORS_TOKEN) private readonly errors: typeof errorsMap,
	) {}

	getMessage(errorKey: string): string {
		return this.errors[errorKey] || ''
	}
}
