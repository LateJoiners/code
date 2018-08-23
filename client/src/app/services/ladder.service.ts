import { Injectable } from '@angular/core';
import { Ladder } from '../data/ladder';
import { Teams } from '../data/mock-team';
import { Team } from '../models/team';
import { TeamStatus } from '../models/team_status';

@Injectable({
  providedIn: 'root'
})
export class LadderService {

  constructor() { }

  ladder: any [] = Ladder;
  teams: Team [] = Teams;

  generateLadder(): any [] {
    // for each team, look up the ladder and create a team status

    const results = [];

    for (const line of this.ladder) {
      const tmp_team = this.teams.find(i => i.id === line.team_id);
      const stat_line = line.stats;
      const team_obj = new TeamStatus(tmp_team.name_short, stat_line);
      results.push(team_obj.get_team_results());
    }
    return results;
  }

  getLadder(): Promise<Array<any>> {
    return Promise.resolve(this.generateLadder());
  }


}
