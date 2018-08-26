import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  result: any;
  uri = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTips() {
    return this.http.get(`${this.uri}/tips/mock`);
  }

  getResults() {
    return this.http.get(`${this.uri}/results/mock`);
  }
}
