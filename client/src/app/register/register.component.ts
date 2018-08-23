import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerAttemptFailed = false;
  username: string;
  email: string;
  password: string;
  displayName: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
    this.authService.register(
      this.username,
      this.email,
      this.password,
      this.displayName
    )
      .then(() => {
        const homeUrl = '';
        this.router.navigateByUrl(homeUrl);
      })
      .catch(() => {
        this.registerAttemptFailed = true;
      });
  }

}
