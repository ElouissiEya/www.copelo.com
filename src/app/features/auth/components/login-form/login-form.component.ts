import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {LoginDto} from '../../dtos/login.dto';

@Component({
  selector: 'auth-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  errorMessage?: string;
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });


  constructor(private _authService: AuthService, private router$: Router) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(){
    this.isLoading= true;
    const loginData: LoginDto = this.loginForm.value;
    this._authService.login(loginData).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.router$.navigate(['/home']);
        this.isLoading= false;
      },
      error: (error) => {
        this.errorMessage= error.message;
        this.isLoading= false;
      }
    });
  }
}
