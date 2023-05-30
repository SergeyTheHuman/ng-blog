import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'isv-not-found-page',
	templateUrl: './not-found-page.component.html',
	styleUrls: ['./not-found-page.component.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
