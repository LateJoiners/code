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
    const gamesSort: Fixture[] = this.round_one.sort((leftSide, rightSide): number => {
      if (leftSide.date < rightSide.date) { return -1; }
      if (leftSide.date > rightSide.date) { return 1; }
      return 0;
    });
    return gamesSort;
  }

  getRound(): Promise<Array<Fixture>> {
    return Promise.resolve(this.sortRoundData());
  }
}
