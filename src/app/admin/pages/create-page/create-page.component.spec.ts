import { CreatePageComponent } from '@admin/pages/create-page/create-page.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'

describe('CreatePageComponent', () => {
	let component: CreatePageComponent
	let fixture: ComponentFixture<CreatePageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CreatePageComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(CreatePageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
