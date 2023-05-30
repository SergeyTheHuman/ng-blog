import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core'
import { IPost } from '@src/app/admin/shared/interfaces/post.interface'
import { PostsService } from '@src/app/shared/services/posts/posts.service'
import { Subject, takeUntil } from 'rxjs'

@Component({
	selector: 'isv-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit, OnDestroy {
	destroy$: Subject<string> = new Subject()
	posts$: IPost[] = []
	isPostsLoading: boolean = false

	constructor(
		private readonly postService: PostsService,
		private readonly changeDetectorRef: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.isPostsLoading = true
		this.postService
			.getAll()
			.pipe(takeUntil(this.destroy$))
			.subscribe((posts) => {
				this.isPostsLoading = false
				this.posts$ = posts
				this.changeDetectorRef.detectChanges()
			})
	}

	ngOnDestroy(): void {
		this.destroy$.next('')
		this.destroy$.complete()
	}
}
