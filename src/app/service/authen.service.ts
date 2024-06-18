import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  // Hàm đăng ký
  register(user: any): boolean {
    try {
      let users = JSON.parse(localStorage.getItem('users')!) || [];
      if (users.some((existingUser: any) => existingUser.email === user.email)) {
        return false; // Email already exists
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return true; // Registration successful
    } catch (error) {
      console.error('Error registering user:', error);
      return false; // Registration failed
    }
  }

  // Hàm đăng nhập
  login(email: string, password: string): boolean {
    try {
      let users = JSON.parse(localStorage.getItem('users')!) || [];
      for (let user of users) {
        if (user.email === email && user.password === password) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true; // Login successful
        }
      }
      return false; // Login failed
    } catch (error) {
      console.error('Error logging in:', error);
      return false; // Login failed
    }
  }
  //Hàm kiểm tra đăng nhập hay không
  isLogin(): boolean {
    try {
      // Kiểm tra xem có tồn tại currentUser trong localStorage hay không
      const currentUser = localStorage.getItem('currentUser');
      return currentUser !== null; // Trả về true nếu đã đăng nhập, ngược lại trả về false
    } catch (error) {
      console.error('Error checking login status:', error);
      return false; // Trả về false nếu có lỗi xảy ra
    }
  }
  // Hàm đăng xuất
  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

  // Kiểm tra người dùng hiện tại
  getCurrentUser(): any {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return JSON.parse(localStorage.getItem('currentUser')!);
      } else {

        return null;
      }
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }
}
