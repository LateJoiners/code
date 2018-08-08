// Defines the properties on an individual match, or fixture

import { Team } from './team';

export class Fixture {
  id: string; // give each unique fixture a ref ID
  home: Team;
  away: Team;
  result: [number, number];
  date: string;


  constructor(id: string,
              home: Team,
              away: Team,
              result: [number, number],
              date: string) {
    this.home = home;
    this.away = away;
    this.result = result;
    this.date = date;

  // generate a random hash ID for the fixture based on date and teams playing
  }

  getVenue(): string {
    return this.home.venue;
  }

  getHomeScore(): number {
    return this.result[0];
  }

  getAwayScore(): number {
    return this.result[1];
  }
}
