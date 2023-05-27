import { AdminLayoutComponent } from '@admin/layouts/admin-layout/admin-layout.component'
import { CreatePageComponent } from '@admin/pages/create-page/create-page.component'
import { DashboardPageComponent } from '@admin/pages/dashboard-page/dashboard-page.component'
import { EditPageComponent } from '@admin/pages/edit-page/edit-page.component'
import { LoginPageComponent } from '@admin/pages/login-page/login-page.component'
import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'

const routes: Route[] = [
	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/admin/login',
				pathMatch: 'full',
			},
			{
				path: 'login',
				component: LoginPageComponent,
			},
			{
				path: 'dashboard',
				component: DashboardPageComponent,
			},
			{
				path: 'create',
				component: CreatePageComponent,
			},
			{
				path: 'post/:id/edit',
				component: EditPageComponent,
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRouting {}
