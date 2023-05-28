import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminNavigationComponent } from './navigation.component'

describe('NavigationComponent', () => {
	let component: AdminNavigationComponent
	let fixture: ComponentFixture<AdminNavigationComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminNavigationComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(AdminNavigationComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
