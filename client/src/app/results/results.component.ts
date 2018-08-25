import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { Teams } from '../data/mock-team';
import { Fixture } from '../models/fixture';
import { Team } from '../models/team';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  sport = 'Football';
  tournament = 'English Premier League';
  date = 'Thursday, 23rd August 2018';
  tips;
  results;
  user: User;
  userSub: any;
  teams;


  underscoreRE = /_/;

  constructor(private resService: ResultsService, private authService: AuthenticationService) { }

  getResultBGClass(result) {
    const tip = this.getTipForMatch(result.id);
    if (tip) {
      if (this.tipMatches(tip, result)) {
        return 'bg-success';
      } else {
        return 'bg-danger';
      }
    } else {
      return 'bg-info';
    }
  }

  getLongName(teamID) {
    // console.log('Trying to get name for teamID');
    // console.log(teamID);
    for (const team of this.teams) {
      if (teamID === team.id) {
        // console.log(team);
        return team.name_long;
      }
    }
  }

  getVenue(teamID) {
    for (const team of this.teams) {
      if (teamID === team.id) {
        return team.venue;
      }
    }
  }

  getResults(): void {
    this.results = this.resService.getResults();
  }

  getTips(): void {
    this.tips = this.resService.getTips();
  }

  getTipMatchesString(result) {
    const tip = this.getTipForMatch(result.id);
    if (tip) {
      if (this.tipMatches(tip, result)) {
        return 'Your tip was correct!';
      } else {
        if (tip.result[0] > tip.result[1]) {
          return `You tipped ${this.getLongName(result.home)} to win ${tip.result[0]} - ${tip.result[1]}`;
        } else if (tip.result[1] > tip.result[0]) {
          return `You tipped ${this.getLongName(result.away)} to win ${tip.result[1]} - ${tip.result[0]}`;
        } else {
          return `You tipped a draw at ${tip.result[0]} all`;
        }
      }
    } else {
      return 'You did not tip this match.';
    }
  }

  getTipForMatch(matchID) {
    for (const tip of this.tips) {
      if (tip.matchID === matchID) {
        return tip;
      }
    }
    // console.log('NoTip');
    // console.log(matchID);
    return false; // null might be more elegant, but saw some unexpected behaviour
                  // related to typescript's handling of nulls earlier and don't
                  // want to risk it since I don't really understand what was going on
  }

  tipMatches(tip, result) {
    let correctTip = true;
    if (tip.result[0] !== result.result[0]) {
      correctTip = false;
    } else if (tip.result[1] !== result.result[1]) {
      correctTip = false;
    }
    return correctTip;
  }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userSub = this.authService.onUserUpdated.subscribe(user => {
      this.user = user;
    });
    this.getResults();
    this.getTips();
    this.teams = Teams;
  }

  ngOnDestroy = () => {
    this.userSub.unsubscribe();
  }

}
