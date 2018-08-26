import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { IsNotLoggedInGuard } from './is-not-logged-in.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ResultsComponent } from './results/results.component';
import { RoundComponent } from './round/round.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotLoggedInGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsNotLoggedInGuard]
  },
  {
    path: 'round',
    component: RoundComponent,
    canActivate: [IsLoggedInGuard]
  },
  { path: 'sports', component: SportsComponent },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [IsLoggedInGuard]
  },
  { path: '', redirectTo: '/sports', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
