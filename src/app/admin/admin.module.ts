import { AdminRouting } from '@admin/admin.routing'
import { AdminLayoutComponent } from '@admin/layouts/admin-layout/admin-layout.component'
import { CreatePageComponent } from '@admin/pages/create-page/create-page.component'
import { DashboardPageComponent } from '@admin/pages/dashboard-page/dashboard-page.component'
import { EditPageComponent } from '@admin/pages/edit-page/edit-page.component'
import { LoginPageComponent } from '@admin/pages/login-page/login-page.component'
import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminNavigationComponent } from '@src/app/admin/shared/navigation/navigation.component'
import { SharedModule } from '@src/app/shared/shared.module'
import { TuiEditorModule } from '@taiga-ui/addon-editor'
import { TuiTableFiltersModule, TuiTableModule } from '@taiga-ui/addon-table'
import {
	TuiButtonModule,
	TuiErrorModule,
	TuiLoaderModule,
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
		CreatePageComponent,
		EditPageComponent,
		AdminNavigationComponent,
		DashboardPageComponent,
	],
	imports: [
		SharedModule,
		CommonModule,
		AdminRouting,
		FormsModule,
		ReactiveFormsModule,
		ScrollingModule,
		TuiInputModule,
		TuiErrorModule,
		TuiInputPasswordModule,
		TuiFieldErrorPipeModule,
		TuiTextfieldControllerModule,
		TuiButtonModule,
		TuiEditorModule,
		TuiTableFiltersModule,
		TuiTableModule,
		TuiLoaderModule,
	],
	exports: [],
})
export class AdminModule {}
