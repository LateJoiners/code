import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  constructor(storageService: StorageService)  {
    super(storageService);
  }

  async login(username: string, password: string): Promise<User> {
    const payload = {
      username,
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
}
