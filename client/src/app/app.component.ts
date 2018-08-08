import { Component, OnInit } from '@angular/core';
import { SanityService } from './sanity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private sanityService: SanityService) {}

  ngOnInit() {
    this.sanityService.canMakeCallToApi().then(msg => {
      console.log('Call to API Succeeded:', msg);
    }).catch(error => {
      console.log('Call to API Failed:', error);
    });
  }
}
