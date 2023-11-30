import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSalesSystemComponent } from './home/home.sales-system.component';
import { PagesSalesSystemComponent } from './pages.sales-system.component';
import { SharedSalesSystemModule } from '../shared/shared.sales-system.module';
import { RouterModule } from '@angular/router';
@NgModule({
	declarations: [HomeSalesSystemComponent, PagesSalesSystemComponent],
	imports: [CommonModule, RouterModule, SharedSalesSystemModule],
})
export class SalesSystemModule {}
