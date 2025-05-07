import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingFormComponent } from './components/shopping-form/shopping-form.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingRoutingModule } from './shopping-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingRoutingModule,
    ShoppingFormComponent,     
    ShoppingPageComponent
  ]
})
export class ShoppingModule { }
