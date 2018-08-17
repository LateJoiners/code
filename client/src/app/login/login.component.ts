import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginAttemptFailed = false;

  constructor() {
    /** work out how to determine at this point whether
    a login attempt has just failed, and if so execute the following:
    this.loginAttemptFailed = true;
    */
  }

  ngOnInit() {
  }

}
