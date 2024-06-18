import { Component, Input } from '@angular/core';
import { GameComponent } from '../game.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ez-math-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ez-math-game.component.html',
  styleUrl: './ez-math-game.component.css'
})
export class EzMathGameComponent {
  cards: Array<{ value: number, flipped: boolean, matched: boolean }> = [];
  firstCard: any = null;
  secondCard: any = null;
  lockBoard: boolean = false;

  ngOnInit() {
    this.initializeGame();
  }
  constructor(private router :Router){}

  initializeGame() {
    const cardValues = Array.from({ length: 8 }, (_, i) => i + 1);
    this.cards = [...cardValues, ...cardValues]
      .map(value => ({ value, flipped: false, matched: false }))
      .sort(() => Math.random() - 0.5);
  }

  selectCard(card: { flipped: boolean; matched: any; }) {
    if (this.lockBoard || card.flipped || card.matched) {
      return;
    }

    card.flipped = true;

    if (!this.firstCard) {
      this.firstCard = card;
    } else if (!this.secondCard) {
      this.secondCard = card;
      this.checkForMatch();
    }
  }

  checkForMatch() {
    this.lockBoard = true;
    setTimeout(() => {
      if (this.firstCard.value === this.secondCard.value) {
        this.firstCard.matched = true;
        this.secondCard.matched = true;
      } else {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
      }
      this.firstCard = null;
      this.secondCard = null;
      this.lockBoard = false;
    }, 1000);
  }
  goback(){
    this.router.navigate(['game']);
  }
}
