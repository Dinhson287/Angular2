import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoAppComponent } from '../todo-app/todo-app.component';
import { AuthService } from '../service/authen.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TodoAuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLogin()){
      return true;
    }
    else{
      this.router.navigate(['login']);
    }

    return true;
  }
}
