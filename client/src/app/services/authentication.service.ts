import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  onUserUpdated = new EventEmitter<User>();

  constructor(storageService: StorageService)  {
    super(storageService);

    storageService.onKeyUpdated.subscribe(key => {
      this.onUserUpdated.emit(this.user);
    });
  }

  async login(emailOrUsername: string, password: string): Promise<User> {
    const payload = {
      emailOrUsername,
      password
    };
    const user = await this.post<any>('authentication/login', payload);
    this.setLoggedInUser(user);
    return user;
  }

  async register(username: string, email: string, password: string, displayName: string): Promise<User> {
    const payload = {
      username,
      email,
      password,
      displayName
    };
    const user = await this.post<any>('authentication/register', payload);
    this.setLoggedInUser(user);
    return user;
  }

  getUser() {
    return this.user;
  }
}
