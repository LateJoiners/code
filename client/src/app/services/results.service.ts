import { Injectable } from '@angular/core';
import { Tips } from '../data/mock-tips';
import { Results } from '../data/mock-results';
import { Observable, of } from 'rxjs';
import { Tip } from '../models/tip';
import { Fixture } from '../models/fixture';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }

  getTips(): Observable<Tip[]> {
    return of(Tips);
  }

  getResults(): Observable<Fixture[]> {
    return of(Results);
  }
}
