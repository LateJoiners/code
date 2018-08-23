import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CanActivateViaAuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ResultsComponent } from './results/results.component';
import { RoundComponent } from './round/round.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'round',
    component: RoundComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  { path: 'sports', component: SportsComponent },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  { path: '', redirectTo: '/sports', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
