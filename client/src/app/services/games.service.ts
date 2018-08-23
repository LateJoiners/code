import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Round } from '../data/round';
import { Fixture } from '../models/fixture';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  round_one: Fixture[] = Round;

  sortRoundData(): Fixture[] {
    // this.sortedGames = this.games;
    const gamesSort: Fixture[] = this.round_one.sort((leftSide, rightSide): number => {
      if (leftSide.date < rightSide.date) { return -1; }
      if (leftSide.date > rightSide.date) { return 1; }
      return 0;
    });
    console.log('Sorted Games: ', gamesSort);
    return gamesSort;
  }

  getRound(): Promise<Array<Fixture>> {
    console.log('getRound called');
    return Promise.resolve(this.sortRoundData());
  }
}
