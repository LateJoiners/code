import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import loccaleEnAu from '@angular/common/locales/en-AU';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { RoundComponent } from './round/round.component';
import { SanityService } from './sanity.service';
import { SportsComponent } from './sports/sports.component';


registerLocaleData(loccaleEnAu);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    RoundComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [SanityService, {provide: LOCALE_ID, useValue: 'en-AU'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
