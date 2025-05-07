import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingPageComponent} from './pages/shopping-page/shopping-page.component';
import { ShoppingFormComponent } from './components/shopping-form/shopping-form.component';




const routes: Routes = [
  {path:'' ,component:ShoppingPageComponent},
  {path:'shopping-form' ,component:ShoppingFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
