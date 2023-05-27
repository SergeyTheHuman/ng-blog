import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NotFoundPageComponent } from '@main/pages/not-found-page/not-found-page.component'

describe('NotFoundPageComponent', () => {
	let component: NotFoundPageComponent
	let fixture: ComponentFixture<NotFoundPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NotFoundPageComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(NotFoundPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
