import { Component } from '@angular/core';
import { AuthService } from '../service/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: AuthService,private router:Router) { }

  register(email: string, password: string) {
    this.authService.register({ email, password });
    alert('Registration successful');
    this.router.navigate(['']);
  }
  gotoLogin(){
  this.router.navigate(['login']);
}
}
