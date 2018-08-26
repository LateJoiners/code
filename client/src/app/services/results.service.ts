import { Injectable } from '@angular/core';
import { Tips } from '../data/mock-tips';
import { Results } from '../data/mock-results';
import { Observable, of } from 'rxjs';
import { Tip } from '../models/tip';
import { Fixture } from '../models/fixture';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  result: any;
  uri = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTips(): Observable<Tip[]> {

    // Issues on deployment - "mixed active content"
    // seems despite the uri variable having http*S*
    // things are trying to use http - and browsers
    // don't want to render something coming from
    // both sources

    // reverting to static files served directly through
    // this service

    // return this.http.get(`${this.uri}/tips/mock`);
    return of(Tips);
  }

  getResults(): Observable<Fixture[]> {
    // Issues on deployment - "mixed active content"
    // seems despite the uri variable having http*S*
    // things are trying to use http - and browsers
    // don't want to render something coming from
    // both sources

    // reverting to static files served directly through
    // this service

    // return this.http.get(`${this.uri}/results/mock`);
    return of(Results);
  }
}
