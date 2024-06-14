import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/authen.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) { }

  login(email: string, password: string) {
    if (this.authService.login(email, password)) {
      alert('Login successful');
      this.router.navigate(['']);
    } else {
      alert('Invalid credentials');
    }
  }
  gotoRegister(){
    this.router.navigate(['register']);
  }
}
