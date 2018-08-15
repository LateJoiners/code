import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Round } from '../data/round';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  this_round = Round;

  getRound(): Promise<Array<any>> {
    console.log('getRound called');
    return Promise.resolve(this.this_round);
  }
}