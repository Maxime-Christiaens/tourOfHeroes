import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAuth: boolean;

  constructor() { }

  signIn(){
    return this.isAuth = true;
  }

  signOut(){
    return this.isAuth = false;
  }
                                                               
}
