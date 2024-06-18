import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { GameMainPageComponent } from './game-main-page/game-main-page.component';
import { XoGameComponent } from './xo-game/xo-game.component';
import { EzMathGameComponent } from './ez-math-game/ez-math-game.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      {
        path: '',
        component: GameMainPageComponent,
      },
      {
        path: 'xo-game',
        component: XoGameComponent,
      },
      {
        path: 'ez-math',
        component: EzMathGameComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GameModule {}
