import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  sport = 'Football';
  tournament = 'English Premier League';
  date = 'Thursday, 23rd August 2018';
  results = [ { location: 'Old Trafford, Manchester',
                        date: 'Thursday, 23rd August 2018',
                        team1: 'Manchester_United',
                        team2: 'Leicester_City',
                        team1Score: '2',
                        team2Score: '1'},
                      { location: 'St James\' Park, Newcastle',
                        date: 'Thursday, 23rd August 2018',
                        team1: 'Newcastle_United',
                        team2: 'Tottenham_Hotspur',
                        team1Score: '0',
                        team2Score: '2'},
                      { location: 'Vitality Stadium, Bournemouth',
                        date: 'Thursday, 23rd August 2018',
                        team1: 'Bournemouth',
                        team2: 'Cardiff_City',
                        team1Score: '1',
                        team2Score: '1'},
                      { location: 'Craven Cottage, London',
                        date: 'Thursday, 23rd August 2018',
                        team1: 'Fulham',
                        team2: 'Crystal_Palace',
                        team1Score: '0',
                        team2Score: '1'},
                      { location: 'John Smith\'s Stadium, Huddersfield',
                        date: 'Thursday, 23rd August 2018',
                        team1: 'Huddersfield',
                        team2: 'Chelsea',
                        team1Score: '0',
                        team2Score: '3'},
                      { location: 'Vicarage Road, Watford',
                        date: 'Thursday, 23rd August 2018',
                        team1: 'Watford',
                        team2: 'Brighton',
                        team1Score: '0',
                        team2Score: '0'},
                      { location: 'Molineux Stadium, Wolverhampton',
                        date: 'Wednesday, 22nd August 2018',
                        team1: 'Wolverhampton',
                        team2: 'Everton',
                        team1Score: '1',
                        team2Score: '3'},
                      { location: 'Anfield, Liverpool',
                        date: 'Wednesday, 22nd August 2018',
                        team1: 'Liverpool',
                        team2: 'West_Ham',
                        team1Score: '3',
                        team2Score: '2'},
                      { location: 'St Mary\'s Stadium, Southampton',
                        date: 'Wednesday, 22nd August 2018',
                        team1: 'Southampton',
                        team2: 'Burnley',
                        team1Score: '0',
                        team2Score: '1'},
                      { location: 'Emirates Stadium, London',
                        date: 'Wednesday, 22nd August 2018',
                        team1: 'Arsenal',
                        team2: 'Manchester_City',
                        team1Score: '3',
                        team2Score: '2'}
                       ];

  underscoreRE = /_/;

  constructor() { }



  ngOnInit() {
  }

}
