import { Location } from '@angular/common'
import {
	ChangeDetectionStrategy,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { IPost } from '@src/app/admin/shared/interfaces/post.interface'
import { notifications } from '@src/app/shared/services/notifications/notifications'
import { NotificationsService } from '@src/app/shared/services/notifications/notifications.service'
import { PostsService } from '@src/app/shared/services/posts/posts.service'
import {
	defaultEditorExtensions,
	TUI_EDITOR_EXTENSIONS,
} from '@taiga-ui/addon-editor'
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit'
import { of, Subject, switchMap, takeUntil } from 'rxjs'

@Component({
	selector: 'isv-edit-page',
	templateUrl: './edit-page.component.html',
	styleUrls: ['./edit-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: TUI_VALIDATION_ERRORS,
			useValue: {
				required: 'Can not be empty!',
				email: 'Enter a valid email',
				maxlength: ({ requiredLength }: { requiredLength: string }) =>
					`Maximum length — ${requiredLength}`,
				minlength: ({ requiredLength }: { requiredLength: string }) =>
					of(`Minimum length — ${requiredLength}`),
			},
		},
		{
			provide: TUI_EDITOR_EXTENSIONS,
			useValue: defaultEditorExtensions,
		},
	],
})
export class EditPageComponent implements OnInit, OnDestroy {
	destroy$: Subject<string> = new Subject()
	post: IPost | null = null
	isPostLoading: boolean = false

	form: FormGroup = new FormGroup({
		title: new FormControl<string>('', {
			validators: [Validators.required, Validators.minLength(3)],
			nonNullable: true,
		}),
		content: new FormControl<string>('', {
			validators: [Validators.required, Validators.minLength(3)],
			nonNullable: true,
		}),
	})

	constructor(
		private readonly route: ActivatedRoute,
		private readonly postsService: PostsService,
		private readonly location: Location,
		private readonly notificationsService: NotificationsService,
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
				this.form.get('title')?.setValue(post.title)
				this.form.get('content')?.setValue(post.content)
				this.isPostLoading = false
			})
	}

	ngOnDestroy(): void {
		this.destroy$.next('')
		this.destroy$.complete()
	}

	submit() {
		if (this.form.invalid) return

		const newPost: IPost = {
			...this.post,
			title: this.form.value.title,
			content: this.form.value.content,
		} as IPost

		this.postsService
			.update(newPost)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.notificationsService.showNotification(
					notifications.EDIT_SUCCESS,
				)
			})
	}

	goBack() {
		this.location.back()
	}
}
