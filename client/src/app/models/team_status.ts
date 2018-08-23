export class TeamStatus {
    name: string;
    stats: any;

    constructor(name: string, stats: any) {
      this.name = name;
      this.stats = this.parse_stat_data(stats);
    }

    parse_stat_data(stats: any): any {
      const tmp_stat_data = stats;
      tmp_stat_data.goal_diff = stats.goals_for - stats.goals_against;
      tmp_stat_data.points = (stats.wins * 3) + stats.draws;

      return tmp_stat_data;
    }

    get_team_results(): any {
      return { 'name' : this.name, 'stats' : this.stats };
    }
  }
