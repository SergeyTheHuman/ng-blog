import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from '@src/app/app.component'
import { AppRoutingModule } from '@src/app/app.routing'
import { MainLayoutComponent } from '@src/app/main/layouts/main-layout/main-layout.component'
import { HomePageComponent } from '@src/app/main/pages/home-page/home-page.component'
import { PostPageComponent } from '@src/app/main/pages/post-page/post-page.component'
import { errorsMap, ERRORS_TOKEN } from '@src/app/shared/services/errors/errors'
import { ErrorsService } from '@src/app/shared/services/errors/errors.service'
import { SharedModule } from '@src/app/shared/shared.module'
import { TuiAlertModule, TuiButtonModule, TuiRootModule } from '@taiga-ui/core'
import { NavigationComponent } from './main/shared/navigation/navigation.component'
import { PostComponent } from './main/shared/post/post.component'

@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		HomePageComponent,
		PostPageComponent,
		NavigationComponent,
		PostComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		TuiAlertModule,
		TuiRootModule,
		TuiButtonModule,
		AppRoutingModule,
	],
	providers: [ErrorsService, { provide: ERRORS_TOKEN, useValue: errorsMap }],
	bootstrap: [AppComponent],
})
export class AppModule {}
