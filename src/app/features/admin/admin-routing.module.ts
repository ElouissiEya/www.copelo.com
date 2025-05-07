import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { OrderDetailsComponent} from './components/order-details/order-details.component';
import { OrdersListComponent} from './components/orders-list/orders-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';




const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'orders', component: OrdersListComponent },           // ← Manquait
  { path: 'order/:id', component: OrderDetailsComponent },      // ← Manquait
  { path: 'users', component: UsersListComponent },             // ← Remplace UserDetailsComponent
  { path: 'user/:id', component: UserDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
