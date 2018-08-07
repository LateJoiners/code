// mock data for a simulate "upcoming" round of fixtures
import { Fixture } from './fixture';
import { Team } from './team';

import  * as team from './temp_data_teams';


export let ROUND: Fixture[] = [];

ROUND = [
  { home: team.Man_Utd,
  away: team.Leicester,
  result: [0, 0],
  date: '10/8/2018'
  },
  { home: team.AFC,
    away: team.Cardiff,
    result: [0, 0],
    date: '11/8/2018'
  },
  { home: team.Fulham,
    away: team.Crystal_Palace,
    result: [0, 0],
    date: '11/8/2018'
  },
  { home: team.Huddersfield,
    away: team.Chelsea,
    result: [0, 0],
    date: '11/8/2018'
  },
  { home: team.Newcastle,
    away: team.Tottenham,
    result: [0, 0],
    date: '11/8/2018'
  },
  { home: team.Watford,
    away: team.Brighton,
    result: [0, 0],
    date: '11/8/2018'
  },
  { home: team.Wolverhampton,
    away: team.Everton,
    result: [0, 0],
    date: '11/8/2018'
  },
  { home: team.Arsenal,
    away: team.Man_City,
    result: [0, 0],
    date: '12/8/2018'
  },
  ];
