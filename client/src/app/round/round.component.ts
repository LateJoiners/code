// Component to display a list of FIXTURES from which the USER
// can make their predications/selections

import { Component, OnInit } from '@angular/core';
import { Teams } from '../data/mock-team';
import { Fixture } from '../models/fixture';
import { Team } from '../models/team';
import { GamesService } from '../services/games.service';

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
  tmp_date: string;
  display='none';

  ngOnInit() {
    this.getRoundData();
    this.teams = Teams;
  }

  getRoundData(): void {
    this.gamesService.getRound().then(games => this.games = games);
  }

  getVenueName(team: string): string {
    const team_obj = this.teams.find(i => i.name_long === team);
    return team_obj.venue;
  }

  getTeamBadgeID(team: string): string {
    const team_obj = this.teams.find(i => i.name_long === team);
    return 't_' + team_obj.id;
  }

  displayGameDate(date_to_check: string): boolean {
    if (date_to_check === this.tmp_date) {
      return false;
    } else {
      this.tmp_date = date_to_check;
      return true;
    }
  }

  niceDate(date: string) {
    // reformats date string to a more reader-friendly formatting
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
    const date_str_split = date.split('/');
    const old_date = new Date(Number(date_str_split[2]), Number(date_str_split[1]) - 1, Number(date_str_split[0]));
    return old_date.toLocaleDateString('en-US', options);
  }

  // TODO: build a ladder detail view to construct the ladder dynamically

  openModal(){

    this.display='block'; 

 }

 onCloseHandled(){

  this.display='none'; 

}

}
