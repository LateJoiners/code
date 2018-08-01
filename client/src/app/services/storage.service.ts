import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  onKeyUpdated = new EventEmitter<string>();

  save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    this.onKeyUpdated.emit(key);
  }

  delete(key: string) {
    localStorage.removeItem(key);
    this.onKeyUpdated.emit(key);
  }

  get<T>(key: string) {
    return JSON.parse(localStorage.getItem(key)) as T;
  }

  getString(key: string) {
    return localStorage.getItem(key);
  }
}
