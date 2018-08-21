import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginAttemptFailed = false;
  emailOrUsername: string;
  password: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.onUserUpdated.subscribe(user => {
      console.log('user', user);
    });
  }

  async login() {
    this.authService.login(this.emailOrUsername, this.password)
      .then(() => {
        this.router.navigateByUrl('/sports');
      })
      .catch(() => {
        this.loginAttemptFailed = true;
      });
  }

}
