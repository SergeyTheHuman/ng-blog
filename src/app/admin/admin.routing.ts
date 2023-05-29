import { AdminLayoutComponent } from '@admin/layouts/admin-layout/admin-layout.component'
import { CreatePageComponent } from '@admin/pages/create-page/create-page.component'
import { DashboardPageComponent } from '@admin/pages/dashboard-page/dashboard-page.component'
import { EditPageComponent } from '@admin/pages/edit-page/edit-page.component'
import { LoginPageComponent } from '@admin/pages/login-page/login-page.component'
import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { authGuard } from '@src/app/admin/shared/guards/auth.guard'

const routes: Route[] = [
	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/admin/dashboard',
				pathMatch: 'full',
			},
			{
				path: 'login',
				component: LoginPageComponent,
			},
			{
				path: 'dashboard',
				component: DashboardPageComponent,
				canActivate: [authGuard],
			},
			{
				path: 'create',
				component: CreatePageComponent,
				canActivate: [authGuard],
			},
			{
				path: 'post/:id/edit',
				component: EditPageComponent,
				canActivate: [authGuard],
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRouting {}
