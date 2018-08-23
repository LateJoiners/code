import { Injectable } from '@angular/core';
import { Teams } from '../data/mock-team';
import { Ladder } from '../data/ladder';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class LadderService {

  constructor() { }

  ladder: any [] = Ladder;
  teams: Team [] = Teams;

  generateLadder(): any [] {
    // for each team, look up the ladder and create a team status
    
    let results = [];
    
    for (let line of this.ladder) {
      const tmp_team = this.teams.find(i => i.id = line.team_id);
      const stat_line = line.stats;
      const team_obj = new TeamStatus(tmp_team.name_long, stat_line);
      results.push(team_obj.get_team_results());
    }
    console.log('generate ladder: ', results);
    return results;
  }

  getLadder(): Promise<Array<any>> {
    console.log('ladderService getLadder called');
    return Promise.resolve(this.generateLadder());
  }


}

export class TeamStatus {
  name: string;
  stats: any [];

  constructor(name: string, stats: any []) {
    this.name = name;
    this.stats = this.parse_stat_data(stats);
  }

  parse_stat_data(stats: number []): number [] {
    let tmp_stat_data = stats;
    tmp_stat_data[6] = stats[5] - stats[6];
    tmp_stat_data[7] = (stats[1] * 3) + stats[2];
    
    return tmp_stat_data;
  }

  get_team_results(): any {
    return { 'name' : this.name, 'stats' : this.stats };
  } 
}
