import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    AddProductComponent,
    DashboardComponent,
    UsersListComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
