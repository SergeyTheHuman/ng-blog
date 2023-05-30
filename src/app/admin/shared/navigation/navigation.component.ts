import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@src/app/admin/shared/services/auth.service'
import { distinctUntilChanged, Subject, takeUntil, tap } from 'rxjs'

@Component({
	selector: 'isv-admin-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminNavigationComponent implements OnInit, OnDestroy {
	destroy$: Subject<string> = new Subject()

	constructor(
		private readonly router: Router,
		public readonly authService: AuthService,
		private readonly changeDetectorRef: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.authService.isAuthentificated$
			.pipe(
				tap((a) => console.log(a)),
				distinctUntilChanged(),
				takeUntil(this.destroy$),
			)
			.subscribe((isAuth) => this.changeDetectorRef.detectChanges())
	}

	ngOnDestroy(): void {
		this.destroy$.next('')
		this.destroy$.complete()
	}

	logout(event: Event) {
		event.preventDefault()
		this.authService.logout()
		this.router.navigate(['admin', 'login'])
	}
}
