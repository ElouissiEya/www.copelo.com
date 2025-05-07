import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './features/auth/auth.module';
import { ShoppingModule } from './features/shopping/shopping.module';
import { SharedModule } from './shared/shared.module';
import { SecHeaderComponent } from './features/sec/components/sec-header/sec-header.component';
import { SecSidebarComponent } from './features/sec/components/sec-sidebar/sec-sidebar.component';
import { SecCartComponent } from './features/sec/components/sec-cart/sec-cart.component';
import { SecProductGridComponent } from './features/sec/components/sec-product-grid/sec-product-grid.component';
import { SecFooterComponent } from './features/sec/components/sec-footer/sec-footer.component';
import { SecHeaderPageComponent } from './features/sec/pages/sec-header-page/sec-header-page.component';
import { SecSidebarPageComponent } from './features/sec/pages/sec-sidebar-page/sec-sidebar-page.component';
import { SecCartPageComponent } from './features/sec/pages/sec-cart-page/sec-cart-page.component';
import { SecProductGridPageComponent } from './features/sec/pages/sec-product-grid-page/sec-product-grid-page.component';
import { SecFooterPageComponent } from './features/sec/pages/sec-footer-page/sec-footer-page.component';
import { ShoppingFormComponent } from './features/shopping/component/shopping-form/shopping-form.component';
import { ShoppingPageComponent } from './features/shopping/shopping-page/shopping-page.component';
import { ProductDtoTsComponent } from './features/shopping/dtos/product.dto.ts/product.dto.ts.component';
import { CartItemDtoTsComponent } from './features/shopping/dtos/cart-item.dto.ts/cart-item.dto.ts.component';



@NgModule({
  declarations: [
    AppComponent,
    SecHeaderComponent,
    SecSidebarComponent,
    SecCartComponent,
    SecProductGridComponent,
    SecFooterComponent,
    SecHeaderPageComponent,
    SecSidebarPageComponent,
    SecCartPageComponent,
    SecProductGridPageComponent,
    SecFooterPageComponent,
    ShoppingFormComponent,
    ShoppingPageComponent,
    ProductDtoTsComponent,
    CartItemDtoTsComponent,
    // NE PAS ajouter les composants standalone ici
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    ShoppingModule,
    SharedModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 



