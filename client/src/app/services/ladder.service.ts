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
      // console.log('parsing: ', line);
      let tmp_team = this.teams.find(i => i.id === line.team_id);
      let stat_line = line.stats;
      let team_obj = new TeamStatus(tmp_team.name_short, stat_line);
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

export class TeamStatus {
  name: string;
  stats: any;

  constructor(name: string, stats: any) {
    this.name = name;
    this.stats = this.parse_stat_data(stats);
  }

  parse_stat_data(stats: any): any {
    let tmp_stat_data = stats;
    tmp_stat_data.goal_diff = stats.goals_for - stats.goals_against;
    tmp_stat_data.points = (stats.wins * 3) + stats.draws;
    
    return tmp_stat_data;
  }

  get_team_results(): any {
    return { 'name' : this.name, 'stats' : this.stats };
  } 
}
