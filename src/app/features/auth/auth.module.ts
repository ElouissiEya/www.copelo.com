import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {AuthRoutingModule} from './auth-routing.module';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    RouterLink
  ]
})
export class AuthModule { }
