import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { InvitationsComponent } from './trips/invitations/invitations.component';
import { MyTripsComponent } from './trips/my-trips/my-trips.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'trips',
        children: [
          { path: 'my-trips', component: MyTripsComponent },
          { path: 'invitations', component: InvitationsComponent },
          { path: '', pathMatch: 'full', redirectTo: 'my-trips' }, // default route
        ]
      },
      {
        path: 'planning',
        children: [
          { path: 'create', component: TripCreateComponent },
          { path: 'edit/:id', component: TripEditComponent },
          { path: 'my-organized', component: MyOrganizedTripsComponent },
          { path: 'all', component: AllTripsComponent },
          { path: '', pathMatch: 'full', redirectTo: 'my-organized' }, // default route
        ]
      },
      {
        path: 'admin',
        children: [
          { path: 'users', component: UsersComponent },
          { path: 'offices', component: OfficesComponenet },
          { path: '', pathMatch: 'full', redirectTo: 'users' }, // default route
        ]
      },
      {
        path: 'statistics',
        children: [
        ]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
