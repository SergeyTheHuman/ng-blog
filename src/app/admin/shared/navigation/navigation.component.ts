import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@src/app/admin/shared/services/auth.service'

@Component({
	selector: 'isv-admin-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminNavigationComponent {
	constructor(
		private readonly router: Router,
		public readonly authService: AuthService,
	) {}

	logout(event: Event) {
		event.preventDefault()
		this.authService.logout()
		this.router.navigate(['admin', 'login'])
	}
}
