import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { StorageService } from './storage.service';

const LOGGED_IN_USER_KEY = 'late-joiners-user';
const AUTH_HEADER = 'Authorization';

export class BaseService {
  private axiosInstance: AxiosInstance;
  private loggedInUserUpdated: any;
  protected user: User;

  private initializeAxiosInstance = () => {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl
    });

    this.user = this.storageService.get(LOGGED_IN_USER_KEY);
    if (this.user) {
      this.axiosInstance.defaults.headers.common[AUTH_HEADER] = this.user.token;
    }
  }

  constructor(private storageService: StorageService) {
    this.loggedInUserUpdated = this.storageService.onKeyUpdated.subscribe(
      this.initializeAxiosInstance
    );
    this.initializeAxiosInstance();
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
  }
}
