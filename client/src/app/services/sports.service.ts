import { Injectable } from '@angular/core';
import { Sports } from '../data/sports';
import { Sport } from '../models/sport';

import { Football_Leagues } from '../data/football_leagues';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  this_sports;

  constructor() {
    this.this_sports = <Array<Sport>>Sports;
    var sport_obj:Sport;
    for (let sport_obj of this.this_sports) {

      if (sport_obj.label == 'Football'){
        sport_obj.leagues = Football_Leagues;
      }
    }
   }

  getSports(): Promise<Array<Sport>> {
    console.log('getSports called');
    console.log(this.this_sports);
    return Promise.resolve(this.this_sports);
  }
}
