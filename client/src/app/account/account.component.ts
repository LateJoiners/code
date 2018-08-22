import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  imports: [ FormsModule ]
})
export class AccountComponent implements OnInit {

  name = "Bob";
  DOB = new Date();
  username = "Bob";
  email = "bob@somewhere.com";
  blankEmail = false;
  //Was trying to use one variable w/ null to model all three states
  //(no update attempted, update failed, update succeeded) but ran into
  //odd behaviour most likely due to my lack of understanding on exactly how
  //js/ts handles null - so going with simpler option (two booleans)
  emailUpdateFailed = false;
  emailUpdateSuccess = false;

  constructor() {
    this.emailUpdateSuccess = true;

  }

  async attemptEmailUpdate() {
    //presumably a call to a yet-to-be-written service that
    //calls a yet-to-be-written API endpoint via post asking to
    //update the email address, and receives back
  }

  determineAction(something) {
    //take result of attemptEmailUpdate and determine if attempt was successful
    //(i.e. if emailUpdateSuccess should be set true, and setEmail() called)
    //or unsuccessful (and determineErrorType() called)
  }

  determineErrorType(something) {
    //work out what type of error (API complaining about blank email field,
    //or some other error) and set emailUpdateFailed or blankEmail to be
    //true as required
  }

  setEmail(email) {
    this.email = email;
  }

  ngOnInit() {
  }

}
