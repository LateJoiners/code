// mock data for a simulate "upcoming" round of fixtures
import { Fixture } from './fixture';
import { Team } from './team';

import  * as team from './temp_data_teams';


export const ROUND: Fixture[] = [
  { home:
      { id: 1, name_long: 'Manchester United', name_short: 'Man Utd', venue: 'Old Trafford' },
    away:
      { id: 2, name_long: 'Leicester City', name_short: 'LCY', venue: 'somewhere'},
    result: [0, 0],
    date: '10/8/2018'
  },
  { home:
    { id: 3, name_long: 'AFC Bournemouth', name_short: 'AFC', venue: 'Old Trafford' },
    away:
      { id: 4, name_long: 'Arsenal', name_short: 'Arsenal', venue: 'Etihad Stadium'},
    result: [0, 0],
    date: '11/8/2018'
  },
  { home:
    { id: 5, name_long: 'Huddersfield Town', name_short: 'Hud. Town', venue: 'somewhere' },
    away:
      { id: 6, name_long: 'Chelsea', name_short: 'Chelsea', venue: 'somewhere'},
    result: [0, 0],
    date: '11/8/2018'
  },
  { home:
    { id: 7, name_long: 'Fulham', name_short: 'Fulham', venue: 'somewhere' },
    away:
      { id: 8, name_long: 'Crystal Palace', name_short: 'Cry Pal', venue: 'somewhere'},
    result: [0, 0],
    date: '11/8/2018'
  },
  { home:
    { id: 9, name_long: 'Newcastle United', name_short: 'New Utd', venue: 'somewhere' },
    away:
      { id: 10, name_long: 'Tottenham Hotspur', name_short: 'Spurs', venue: 'somewhere'},
    result: [0, 0],
    date: '10/8/2018'
  },


]

