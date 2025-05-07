import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecHeaderPageComponent } from './features/sec/pages/sec-header-page/sec-header-page.component';
import { SecSidebarPageComponent } from './features/sec/pages/sec-sidebar-page/sec-sidebar-page.component';
import { SecCartPageComponent } from './features/sec/pages/sec-cart-page/sec-cart-page.component';
import { SecProductGridPageComponent } from './features/sec/pages/sec-product-grid-page/sec-product-grid-page.component';
import { SecFooterPageComponent } from './features/sec/pages/sec-footer-page/sec-footer-page.component';











const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'shopping',
    children: [
      { path: 'header', component: SecHeaderPageComponent },
      { path: 'sidebar', component: SecSidebarPageComponent },
      { path: 'cart', component: SecCartPageComponent },
      { path: 'products', component: SecProductGridPageComponent },
      { path: 'footer', component: SecFooterPageComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' } // redirection par défaut
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
