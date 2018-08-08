import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { StorageService } from './storage.service';

const LOGGED_IN_USER_KEY = 'late-joiners-user';
const AUTH_HEADER = 'x-access-token';

export class BaseService {
  private axiosInstance: AxiosInstance;
  loggedInUserUpdated: any;

  private initializeAxiosInstance () {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl
    });

    const user: User = this.storageService.get(LOGGED_IN_USER_KEY);
    if (user) {
      this.axiosInstance.defaults.headers.common[AUTH_HEADER] = user.token;
    }
  }

  constructor(private storageService: StorageService) {
    this.loggedInUserUpdated = this.storageService.onKeyUpdated.subscribe(
      this.initializeAxiosInstance
    );
    this.initializeAxiosInstance();
  }

  get<T>(url: string): Promise<T> {
    return this.axiosInstance.get(url)
      .then(response => response.data);
  }

  put<T>(url: string, data: any): Promise<T> {
    return this.axiosInstance.put(url, data)
      .then(response => response.data);
  }

  post<T>(url: string, data: any): Promise<T> {
    return this.axiosInstance.post(url, data)
      .then(response => response.data);
  }

  delete<T>(url: string): Promise<T> {
    return this.axiosInstance.delete(url)
      .then(response => response.data);
  }

  protected setLoggedInUser(user: User) {
    this.storageService.save(LOGGED_IN_USER_KEY, user);
  }
}
