import { Injectable } from '@angular/core';
import { Tips } from '../data/mock-tips';
import { Results } from '../data/mock-results';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }

  getTips() {
    return Tips;
  }

  getResults() {
    return Results;
  }
}
