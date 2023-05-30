import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'isv-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
