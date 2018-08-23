import { Component, OnInit } from '@angular/core';
import { Teams } from '../data/mock-team';
import { Ladder } from '../data/ladder';
import { LadderService } from '../services/ladder.service';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {

  constructor(private ladderService: LadderService) { }

  ladder: any [];

  ngOnInit() {
    this.getCurrentLadder();
    // this.sortLadderByName();
  }

  getCurrentLadder(): void {
    console.log('getCurrentLadder called');
    this.ladderService.getLadder().then(ladder => this.ladder = ladder);
    console.log('ladder: ', this.ladder);
  }

  sortLadderByName(): any {
    const ladderSort: any = this.ladder.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) { return -1; }
      if (leftSide.name > rightSide.name) { return 1; }
      return 0;
    });
    console.log('Sorted Ladder: ', ladderSort);
    return ladderSort;
  }

}
