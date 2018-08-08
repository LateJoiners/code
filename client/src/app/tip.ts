// A user-pick for a fixture

import { Fixture } from './fixture';

export class Tip {
  user: string; // replace with User - type
  match: Fixture;
  result: string; // enum of type 'Result' or 'Draw' ?
  result_score: Array<number>;

  constructor() {
    // do some validation checking?
    // ensure that if a 'draw' result is selected
    // the scores must be equal?
  }
}
