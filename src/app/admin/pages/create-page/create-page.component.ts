import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IPost } from '@src/app/admin/shared/interfaces/post.interface'
import { PostsService } from '@src/app/shared/services/posts/posts.service'
import {
	defaultEditorExtensions,
	TUI_EDITOR_EXTENSIONS,
} from '@taiga-ui/addon-editor'
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit'
import { of } from 'rxjs'

@Component({
	selector: 'isv-create-page',
	templateUrl: './create-page.component.html',
	styleUrls: ['./create-page.component.scss'],
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
export class CreatePageComponent implements OnInit {
	form!: FormGroup

	constructor(private readonly postsService: PostsService) {}

	ngOnInit(): void {
		this.form = new FormGroup({
			title: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
			content: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
			author: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		})
	}

	submit() {
		const post: IPost = {
			title: this.form.value.title,
			content: this.form.value.content,
			author: this.form.value.author,
			date: new Date(),
		}

		this.postsService
			.create(post)
			.subscribe((response) => console.log(response))
	}
}
