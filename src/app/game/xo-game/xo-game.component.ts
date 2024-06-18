import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-xo-game',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './xo-game.component.html',
  styleUrl: './xo-game.component.css'
})
export class XoGameComponent {

}
