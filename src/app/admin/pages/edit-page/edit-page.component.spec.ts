import { EditPageComponent } from '@admin/pages/edit-page/edit-page.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'

describe('EditPageComponent', () => {
	let component: EditPageComponent
	let fixture: ComponentFixture<EditPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditPageComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(EditPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
