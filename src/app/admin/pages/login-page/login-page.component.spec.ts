import { LoginPageComponent } from '@admin/pages/login-page/login-page.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'

describe('LoginPageComponent', () => {
	let component: LoginPageComponent
	let fixture: ComponentFixture<LoginPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginPageComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(LoginPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
