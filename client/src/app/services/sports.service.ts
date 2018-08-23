import { Injectable } from "@angular/core";
import { Football_Leagues } from "../data/football_leagues";
import { Sports } from "../data/sports";
import { Sport } from "../models/sport";

@Injectable({
  providedIn: "root"
})
export class SportsService {
  sports: Sport[];

  constructor() {
    this.sports = Sports;
    for (const sport_obj of this.sports) {
      if (sport_obj.label === 'Football') {
        sport_obj.leagues = Football_Leagues;
      }
    }
  }

  getSports(): Promise<Array<Sport>> {
    return Promise.resolve(this.sports);
  }
}
