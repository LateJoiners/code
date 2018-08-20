import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SanityService } from './sanity.service';
import { RoundComponent } from './round/round.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import loccaleEnAu from '@angular/common/locales/en-AU';

registerLocaleData(loccaleEnAu);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [SanityService, {provide: LOCALE_ID, useValue: 'en-AU'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
