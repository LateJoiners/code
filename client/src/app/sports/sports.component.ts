// Component intended to display a list of available sports
// the USER can select from in order to joing a tournament

import { Component, OnInit } from '@angular/core';
import { SportsService } from '../services/sports.service';
import { Sport } from '../models/sport';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private sportsService: SportsService) { }

  sports: Sport[];

  ngOnInit() {
    this.getSportsData();
    console.log(this.sports);
  }

  getSportsData(): void {
    console.log('getSportsData called');
    this.sportsService.getSports().then(sports => this.sports = sports);
  }

}
