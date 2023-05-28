import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'isv-admin-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class AdminNavigationComponent {
	constructor(private readonly router: Router) {}

	logout(event: Event) {
		event.preventDefault()
		this.router.navigate(['admin', 'login'])
	}
}
