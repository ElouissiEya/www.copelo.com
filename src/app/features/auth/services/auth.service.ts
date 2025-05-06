import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../dtos/login.dto';
import {RegisterDto} from '../dtos/register.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http$: HttpClient) { }


  login(loginData: LoginDto){
    return this.http$.post('/api/auth/login', loginData);
  }


  register(registerDto: RegisterDto) {
    return this.http$.post('/api/auth/register', registerDto);
  }
}
