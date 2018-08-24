import { Injectable } from "@angular/core";
import { Football_Leagues } from "../data/football_leagues";
import { League_Data } from "../data/league_data";
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
      if (sport_obj.leagues) {
        for (const tourney of sport_obj.leagues) {
          const data = League_Data.find(i => i.id === tourney.id);
          tourney.data = {'tournaments' : data.num_tournaments,
                          'players' : data.num_players };
        }
      }
    }
  }

  getDataForLeague(): void {
    // for each of the leagues in a sport
    // attaches the related participation data
    // for display

    for (const sport_obj of this.sports) {
      if (sport_obj.leagues) {
        for (const tourney of sport_obj.leagues) {
          const data = League_Data.find(i => i.id === tourney.id);
          tourney.data = {'tournaments' : data.num_tournaments,
                          'players' : data.num_players };
        }
      }
    }
  }

  getSports(): Promise<Array<Sport>> {
    console.log(this.sports);
    return Promise.resolve(this.sports);
  }
}
