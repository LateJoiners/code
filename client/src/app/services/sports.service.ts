import { Injectable } from '@angular/core';
import { Sports } from '../data/sports';
import { Sport } from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  this_sports = Sports;

  constructor() { }

  getSports(): Promise<Array<Sport>> {
    console.log('getSports called');
    return Promise.resolve(this.this_sports);
  }
}
