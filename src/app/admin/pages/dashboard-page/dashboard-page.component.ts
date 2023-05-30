import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { IPost } from '@src/app/admin/shared/interfaces/post.interface'
import { PostsService } from '@src/app/shared/services/posts/posts.service'
import { Subject, takeUntil } from 'rxjs'

@Component({
	selector: 'isv-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit, OnDestroy {
	readonly destroy$: Subject<string> = new Subject()
	readonly columns = ['id', 'author', 'title', 'date', 'action']

	readonly filterString = (item: string, value: string): boolean =>
		item.trim().toLowerCase().includes(value.trim().toLowerCase())

	readonly form = new FormGroup({
		title: new FormControl(''),
		author: new FormControl(''),
	})
	posts: IPost[] = []
	isPostsLoading: boolean = false

	constructor(
		private readonly postsService: PostsService,
		private readonly changeDetectorRef: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.isPostsLoading = true
		this.postsService.getAll().subscribe((posts) => {
			this.posts = posts
			this.isPostsLoading = false
			this.changeDetectorRef.detectChanges()
		})
	}

	ngOnDestroy(): void {
		this.destroy$.next('')
		this.destroy$.complete()
	}

	deletePost(id: string) {
		this.postsService
			.remove(id)
			.pipe(takeUntil(this.destroy$))
			.subscribe((response) => {
				this.posts = this.posts.filter((post) => post.id !== id)
				this.changeDetectorRef.detectChanges()
			})
	}
}
