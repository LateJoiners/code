import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Round } from '../data/round';
import { Fixture } from '../models/fixture';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  this_round = Round;

  getRound(): Promise<Array<Fixture>> {
    console.log('getRound called');
    return Promise.resolve(this.this_round);
  }
}
