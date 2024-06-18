import { Component } from '@angular/core';
import { AuthService } from '../service/authen.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,FormsModule],
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
  logout(){
    this.auth.logout();
  }
  login(){
    this.router.navigate(['login']);
  }
  gotoGame(){
    this.router.navigate(['game']);
  }
}
