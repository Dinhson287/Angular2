import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-main-page',
  standalone: true,
  imports: [],
  templateUrl: './game-main-page.component.html',
  styleUrl: './game-main-page.component.css'
})
export class GameMainPageComponent {
  constructor(private router:Router){}
  gotoXO(){
    this.router.navigate(['/game/xo-game']);
  }
  gotoEzMath(){
    this.router.navigate(['/game/ez-math']);
  }
}
