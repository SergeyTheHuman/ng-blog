import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'isv-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {}
