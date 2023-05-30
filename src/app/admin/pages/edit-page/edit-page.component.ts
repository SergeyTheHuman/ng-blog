import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'isv-edit-page',
	templateUrl: './edit-page.component.html',
	styleUrls: ['./edit-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPageComponent {}
