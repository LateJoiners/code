import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Fixture } from '../models/fixture';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})

export class RoundComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  games: Fixture[];

  ngOnInit() {
    this.getRoundData();
    // console.log(this.name);
  }

  getRoundData(): void {
    console.log('getRoundData called');
    this.gamesService.getRound().then(games => this.games = games);
    // console.log(this.games);
  }
}
