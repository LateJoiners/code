// Component to display a list of FIXTURES from which the USER
// can make their predications/selections

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Fixture } from '../models/fixture';
import { Teams } from '../data/mock-team';
import { Team } from '../models/team';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})

export class RoundComponent implements OnInit {

  constructor(private gamesService: GamesService) {}

  games: Fixture[];
  teams: Team[];
  sortedGames: any[];

  ngOnInit() {
    this.getRoundData();
    this.teams = Teams;
    this.sortRoundData();
  }

  getRoundData(): void {
    console.log('getRoundData called');
    this.gamesService.getRound().then(games => this.games = games);
    console.log('from inside getRoundData:', this.games);
  }

  sortRoundData(): void {
    // this.sortedGames = this.games;
    
    let gamesSort: any[] = this.games.sort((leftSide, rightSide): number => {
      if (leftSide.date < rightSide.date) { return -1; }
      if (leftSide.date > rightSide.date) { return 1; }
      return 0;
    });
    console.log('Sorted Games: ', gamesSort);
  }

  getVenueName(team: string): string {
    const team_obj = this.teams.find(i => i.name_long === team);
    return team_obj.venue;
  }

  getTeamBadgeID(team: string): string {
    const team_obj = this.teams.find(i => i.name_long === team);
    return 't_' + team_obj.id;
  }

  // work out the date in order to work out the round of games to show

  //TODO: build a ladder detail view to construct the ladder dynamically
  //TODO: build a sort by date for the game view

}
