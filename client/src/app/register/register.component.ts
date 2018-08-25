import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerAttemptFailedReason: string = null;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async register() {
    if (this.password !== this.confirmPassword) {
      this.registerAttemptFailedReason = 'Your password and confirm password must be the same!';
      return;
    }

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
      .catch((err) => {
        this.registerAttemptFailedReason = err.message;
      });
  }
}
