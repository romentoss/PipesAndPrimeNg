import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { canFlyPipe } from './pipes/can-fly.pipe';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';


@NgModule({
  declarations: [
    BasicsPageComponent,
    canFlyPipe,
    NumbersPageComponent,
    OrderComponent,
    SortByPipe,
    ToggleCasePipe,
    UncommonPagesComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
