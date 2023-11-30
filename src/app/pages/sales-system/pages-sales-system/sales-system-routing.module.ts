import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesSalesSystemComponent } from './pages.sales-system.component';
import { HomeSalesSystemComponent } from './home/home.sales-system.component';

const routes: Routes = [
	{
		path: 'sales-system',
		component: PagesSalesSystemComponent,
		children: [{ path: 'home', component: HomeSalesSystemComponent }],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class SalesSystemRoutingModule {}
