import { Component } from '@angular/core';
import { AuthService } from '../service/authen.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  currentUser:any;
  constructor(private auth:AuthService,private router:Router){};
  ngOnInit():void{
    this.currentUser = this.auth.getCurrentUser();
  }
  gotoToDoList(){
    this.router.navigate(['todo'])
  }
  gotoHome(){
    this.router.navigate([''])
  }
  gotoChatbot(){
    this.router.navigate(['chatgpt'])
  }
  logout(){
    this.auth.logout();
  }
}
