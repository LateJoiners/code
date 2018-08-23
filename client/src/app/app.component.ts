import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'TipPlus+';
  user: User;
  userSub: any;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userSub = this.authService.onUserUpdated.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
