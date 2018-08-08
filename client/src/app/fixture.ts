// Defines the properties on an individual match, or fixture

import { Team } from './team';

export class Fixture {
  id: number; // give each unique fixture a ref ID
  home: Team;
  away: Team;
  result: Array<number>;
  date: string;

  // constructor(home: Team, away: Team, result: Array<number>) {
  //   this.home = home;
  //   this.away = away;
  //   this.result = result;
  // generate a random hash ID for the fixture based on date and teams playing
  //
  // }
  //
  // getVenue() {
  //   return this.home.venue;
  // }
  //
  // getHomeScore() {
  //   return this.result[0];
  // }
  //
  // getAwayScore() {
  //   return this.result[1];
  // }
}
