import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';

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


  underscoreRE = /_/;

  constructor(private resServ: ResultsService) { }

  getResultBGClass(result) {
    const tip = this.getTipForMatch(result.matchID);
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

  getResults(): void {
    this.results = this.resServ.getResults();
  }

  getTips(): void {
    this.tips = this.resServ.getTips();
  }

  getTipMatchesString(result) {
    const tip = this.getTipForMatch(result.matchID);
    if (tip) {
      if (this.tipMatches(tip, result)) {
        return 'Your tip was correct!';
      } else {
        if (tip.team1Score > tip.team2Score) {
          return `You tipped ${result.team1.replace(this.underscoreRE, ' ')} to win ${tip.team1Score} - ${tip.team2Score}`;
        } else if (tip.team2Score > tip.team1Score) {
          return `You tipped ${result.team2.replace(this.underscoreRE, ' ')} to win ${tip.team2Score} - ${tip.team1Score}`;
        } else {
          return `You tipped a draw at ${tip.team1Score} all`;
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
    return false; // null might be more elegant, but saw some unexpected behaviour
                  // related to typescript's handling of nulls earlier and don't
                  // want to risk it
  }

  tipMatches(tip, result) {
    let correctTip = true;
    if (tip.team1Score !== result.team1Score) {
      correctTip = false;
    } else if (tip.team2Score !== result.team2Score) {
      correctTip = false;
    }
    return correctTip;
  }

  ngOnInit() {
    this.getResults();
    this.getTips();
  }

}
