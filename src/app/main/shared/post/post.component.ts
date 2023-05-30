import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { IPost } from '@src/app/admin/shared/interfaces/post.interface'

@Component({
	selector: 'isv-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
	@Input()
	post!: IPost
}
