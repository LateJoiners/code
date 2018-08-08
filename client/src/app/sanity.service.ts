import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor(private httpClient: HttpClient) { }

  canMakeCallToApi(): Promise<string> {
    return this.httpClient.get(`${environment.apiUrl}/sanity/unauthenticated`)
      .toPromise()
      .then((response: any) => response.message);
  }
}
