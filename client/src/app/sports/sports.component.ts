// Component intended to display a list of available sports
// the USER can select from in order to joing a tournament

import { Component, OnInit } from '@angular/core';
import { Sport } from '../models/sport';
import { SportsService } from '../services/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private sportsService: SportsService) { }

  sports: Sport[];
  selectedSport: Sport;

  ngOnInit() {
    this.getSportsData();
  }

  getSportsData(): void {
    this.sportsService.getSports().then(sports => this.sports = sports);
  }

  onSelect(sport: Sport): void {
    if (sport.leagues) {
      this.selectedSport = sport;
    } else {
      this.selectedSport = null;
    }
  }

  gotoLeague(name: string) {
    if (name === 'English Premier League') {
      // goto the round page
    } else {
      // ignore
    }
  }
}
