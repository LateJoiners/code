import { EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { StorageService } from './storage.service';

const LOGGED_IN_USER_KEY = 'late-joiners-user';
const AUTH_HEADER = 'Authorization';

export class BaseService implements OnDestroy {
  private axiosInstance: AxiosInstance;
  private userSub: any;
  protected user: User;
  onUserUpdated = new EventEmitter<User>();

  private initializeAxiosInstance = () => {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl
    });

    this.user = this.storageService.get(LOGGED_IN_USER_KEY);
    if (this.user) {
      this.axiosInstance.defaults.headers.common[AUTH_HEADER] = this.user.token;
    }
  }

  constructor(private storageService: StorageService, private router: Router) {
    this.userSub = this.onUserUpdated.subscribe(
      this.initializeAxiosInstance
    );
    this.initializeAxiosInstance();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  protected get<T>(url: string): Promise<T> {
    return this.axiosInstance.get(url)
      .then(response => response.data);
  }

  protected put<T>(url: string, data: any): Promise<T> {
    return this.axiosInstance.put(url, data)
      .then(response => response.data);
  }

  protected post<T>(url: string, data: any): Promise<T> {
    return this.axiosInstance.post(url, data)
      .then(response => response.data);
  }

  protected delete<T>(url: string): Promise<T> {
    return this.axiosInstance.delete(url)
      .then(response => response.data);
  }

  protected setLoggedInUser(user: User) {
    this.storageService.save(LOGGED_IN_USER_KEY, user);
    this.onUserUpdated.emit(user);
  }

  public logout() {
    this.storageService.delete(LOGGED_IN_USER_KEY);
    this.onUserUpdated.emit(null);

    const homeUrl = '';
    this.router.navigateByUrl(homeUrl);
  }
}
