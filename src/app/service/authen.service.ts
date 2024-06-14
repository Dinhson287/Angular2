import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router:Router) { }

  // Hàm đăng ký
  register(user: any) {
    let users = JSON.parse(localStorage.getItem('users')!) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Hàm đăng nhập
  login(email: string, password: string): boolean {
    let users = JSON.parse(localStorage.getItem('users')!) || [];
    for (let user of users) {
      if (user.email === email && user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
    }
    return false;
  }

 logout(){
  this.router.navigate(['login'])
 }
  // Kiểm tra người dùng hiện tại
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }
}
