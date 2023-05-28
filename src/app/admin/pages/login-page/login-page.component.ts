import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit'
import { of } from 'rxjs'

@Component({
	selector: 'isv-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
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
	],
})
export class LoginPageComponent implements OnInit {
	form!: FormGroup

	constructor() {}

	ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.email,
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		})
	}

	submit() {
		if (this.form.invalid) return

		console.log(this.form.value)
	}
}
