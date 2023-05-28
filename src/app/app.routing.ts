import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { MainLayoutComponent } from '@src/app/main/layouts/main-layout/main-layout.component'
import { HomePageComponent } from '@src/app/main/pages/home-page/home-page.component'
import { PostPageComponent } from '@src/app/main/pages/post-page/post-page.component'

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: HomePageComponent,
			},
			{
				path: 'post/:id',
				component: PostPageComponent,
			},
		],
	},
	{
		path: 'admin',
		loadChildren: () =>
			import('./admin/admin.module').then((m) => m.AdminModule),
	},
	{
		path: '**',
		loadComponent: () =>
			import('./main/pages/not-found-page/not-found-page.component').then(
				(m) => m.NotFoundPageComponent,
			),
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
