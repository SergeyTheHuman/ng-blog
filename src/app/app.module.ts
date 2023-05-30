import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthService } from '@src/app/admin/shared/services/auth.service'
import { AppComponent } from '@src/app/app.component'
import { AppRoutingModule } from '@src/app/app.routing'
import { MainLayoutComponent } from '@src/app/main/layouts/main-layout/main-layout.component'
import { HomePageComponent } from '@src/app/main/pages/home-page/home-page.component'
import { PostPageComponent } from '@src/app/main/pages/post-page/post-page.component'
import { AuthInterceptor } from '@src/app/shared/interceptors/auth.interceptor'
import {
	notificationsMap,
	NOTIFICATIONS_TOKEN,
} from '@src/app/shared/services/notifications/notifications'
import { NotificationsService } from '@src/app/shared/services/notifications/notifications.service'
import { SharedModule } from '@src/app/shared/shared.module'
import { TuiEditorSocketModule } from '@taiga-ui/addon-editor'
import { TuiTableFiltersModule } from '@taiga-ui/addon-table'
import {
	TuiAlertModule,
	TuiButtonModule,
	TuiLoaderModule,
	TuiRootModule,
} from '@taiga-ui/core'
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
		TuiTableFiltersModule,
		TuiLoaderModule,
		TuiEditorSocketModule,
	],
	providers: [
		NotificationsService,
		AuthService,
		{ provide: NOTIFICATIONS_TOKEN, useValue: notificationsMap },
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
