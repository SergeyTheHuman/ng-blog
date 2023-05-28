import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from '@src/app/app.component'
import { AppRoutingModule } from '@src/app/app.routing'
import { MainLayoutComponent } from '@src/app/main/layouts/main-layout/main-layout.component'
import { HomePageComponent } from '@src/app/main/pages/home-page/home-page.component'
import { PostPageComponent } from '@src/app/main/pages/post-page/post-page.component'
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core'

@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		HomePageComponent,
		PostPageComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		TuiRootModule,
		TuiButtonModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
