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
  }

  getCurrentLadder(): void {
    console.log('getCurrentLadder called');
    this.ladderService.getLadder().then(ladder => this.ladder = ladder);
    console.log('ladder: ', this.ladder);
  }

}
