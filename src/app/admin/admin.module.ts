import { AdminRouting } from '@admin/admin.routing'
import { AdminLayoutComponent } from '@admin/layouts/admin-layout/admin-layout.component'
import { CreatePageComponent } from '@admin/pages/create-page/create-page.component'
import { DashboardPageComponent } from '@admin/pages/dashboard-page/dashboard-page.component'
import { EditPageComponent } from '@admin/pages/edit-page/edit-page.component'
import { LoginPageComponent } from '@admin/pages/login-page/login-page.component'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminNavigationComponent } from '@src/app/admin/shared/navigation/navigation.component'
import { AuthService } from '@src/app/admin/shared/services/auth.service'
import { SharedModule } from '@src/app/shared/shared.module'
import {
	TuiButtonModule,
	TuiErrorModule,
	TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {
	TuiFieldErrorPipeModule,
	TuiInputModule,
	TuiInputPasswordModule,
} from '@taiga-ui/kit'

@NgModule({
	declarations: [
		AdminLayoutComponent,
		LoginPageComponent,
		DashboardPageComponent,
		CreatePageComponent,
		EditPageComponent,
		AdminNavigationComponent,
	],
	imports: [
		SharedModule,
		CommonModule,
		AdminRouting,
		FormsModule,
		ReactiveFormsModule,
		TuiInputModule,
		TuiErrorModule,
		TuiInputPasswordModule,
		TuiFieldErrorPipeModule,
		TuiTextfieldControllerModule,
		TuiButtonModule,
	],
	exports: [],
	providers: [AuthService],
})
export class AdminModule {}
