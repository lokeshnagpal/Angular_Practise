import {Component} from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'rb-header',
  templateUrl: './src/app/header.component.html',
  styleUrls: []
})

export class HeaderComponent {
    constructor(private authService: AuthService){}
    
    isAuth(){
       return this.authService.isAuthenticated();
        }
}