import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  connected: boolean;

  constructor(private authservice: AuthServiceService) { }

  ngOnInit() {
    this.connected = this.authservice.isAuth;
  }

  logIn(){
    this.authservice.signIn();
    this.connected = this.authservice.isAuth;
  }

  logOut(){
    this.authservice.signOut();
    this.connected = this.authservice.isAuth;
  }

}
