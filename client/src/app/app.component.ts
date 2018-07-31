import { Component, OnInit } from '@angular/core';
import { SanityService } from './sanity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  apiCallResponse: string;
  constructor(private sanityService: SanityService) {}

  ngOnInit() {
    this.sanityService.canMakeCallToApi().then(msg => {
      this.apiCallResponse = msg;
    }).catch(error => {
      this.apiCallResponse = error;
    });
  }
}
