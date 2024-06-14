import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/authen.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent,TodoAppComponent,ChatgptComponent,LoginPageComponent,HomePageComponent,RegisterComponent,AuthService],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ]
})
export class AppModule { }
