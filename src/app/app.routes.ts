import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoAuthGuard } from './guard/todo-auth.guard';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'todo',
        component: TodoAppComponent,
        canActivate:[TodoAuthGuard],
    },
    {
      path:'game',
     loadChildren: () => import('./game/game.module').then((m) => m.GameModule),
     canActivate:[TodoAuthGuard],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[TodoAuthGuard]
})
export class AppRoutingModule { }
