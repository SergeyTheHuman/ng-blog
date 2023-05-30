import { Location } from '@angular/common'
import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IPost } from '@src/app/admin/shared/interfaces/post.interface'
import { PostsService } from '@src/app/shared/services/posts/posts.service'
import { TUI_SANITIZER } from '@taiga-ui/core'
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify'
import { switchMap } from 'rxjs'

@Component({
	selector: 'isv-post-page',
	templateUrl: './post-page.component.html',
	styleUrls: ['./post-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: TUI_SANITIZER,
			useClass: NgDompurifySanitizer,
		},
	],
})
export class PostPageComponent implements OnInit {
	post: IPost | null = null
	isPostLoading: boolean = false
	constructor(
		private readonly location: Location,
		private readonly route: ActivatedRoute,
		private readonly postsService: PostsService,
		private readonly changeDetectorRef: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.route.params
			.pipe(
				switchMap((params) => {
					this.isPostLoading = true
					return this.postsService.getOne(params['id'])
				}),
			)
			.subscribe((post: IPost) => {
				this.post = post
				this.isPostLoading = false
				this.changeDetectorRef.detectChanges()
			})
	}

	goBack() {
		this.location.back()
	}
}
