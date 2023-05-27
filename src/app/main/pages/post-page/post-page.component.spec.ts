import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PostPageComponent } from '@main/pages/post-page/post-page.component'

describe('PostPageComponent', () => {
	let component: PostPageComponent
	let fixture: ComponentFixture<PostPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PostPageComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(PostPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
