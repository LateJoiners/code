import { Injectable } from '@angular/core';
import { Teams } from '../data/mock-team';
import { Ladder } from '../data/ladder';
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
      // console.log('parsing: ', line);
      const tmp_team = this.teams.find(i => i.id === line.team_id);
      const stat_line = line.stats;
      const team_obj = new TeamStatus(tmp_team.name_short, stat_line);
      results.push(team_obj.get_team_results());
    }
    // console.log('generate ladder: ', results);
    return results;
  }

  getLadder(): Promise<Array<any>> {
    console.log('ladderService getLadder called');
    return Promise.resolve(this.generateLadder());
  }


}
