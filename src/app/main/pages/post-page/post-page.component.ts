import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'isv-post-page',
	templateUrl: './post-page.component.html',
	styleUrls: ['./post-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent {}
