import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { HeaderComponent } from './header.component';
import { HomeComponent} from './home.component';
import { SigninComponent } from './login/signin.component';
import { SignupComponent } from './login/signup.component';
import { AuthService } from "./auth/auth.service";
import { ActivateGuard } from "./login/canActivateGuard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [AuthService,ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
