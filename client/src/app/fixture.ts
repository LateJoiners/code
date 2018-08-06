// Defines the properties on an individual match, or fixture

import { Team } from './team';

export class Fixture {
  home: Team;
  away: Team;
  result: Array<number>;
  date: string;

  constructor(home: Team, away: Team, result: Array<number>) {
    this.home = home;
    this.away = away;
    this.result = result;
  }

  getVenue() {
    return this.home.venue;
  }

  getHomeScore() {
    return this.result[0];
  }

  getAwayScore() {
    return this.result[1];
  }
}
