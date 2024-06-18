import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent,FormsModule,CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  squares: any;
  xIsNext: boolean | undefined;
  winner: string | undefined;

  constructor(private router:Router) { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
    this.clearTimer(); // Clear any existing timer before starting a new game
  }

  get player() {
    return this.xIsNext ? 'O' : 'X';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) { // Only allow moves if no winner yet
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
      if (this.winner) {
        this.startTimer(); // Start timer only if there's a winner
      }
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    if (!this.squares.includes(null)) {
      return 'No one';
    }
    return null;
  }

  // Timer logic
  timer: any;

  startTimer() {
    this.clearTimer(); // Clear any existing timer before starting a new one
    this.timer = setTimeout(() => {
      this.newGame();
    }, 5000); // Restart game after 5 seconds
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  goback(){
    this.router.navigate(['game']) ;
  }
}
