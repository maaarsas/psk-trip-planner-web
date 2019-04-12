import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficesComponent } from './admin/offices/offices.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { AllTripsComponent } from './planning/all-trips/all-trips.component';
import { MyOrganizedTripsComponent } from './planning/my-organized-trips/my-organized-trips.component';
import { TripCreateComponent } from './planning/trip-create/trip-create.component';
import { TripEditComponent } from './planning/trip-edit/trip-edit.component';
import { InvitationsComponent } from './trips/invitations/invitations.component';
import { MyTripsComponent } from './trips/my-trips/my-trips.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
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
          { path: 'offices', component: OfficesComponent },
          { path: '', pathMatch: 'full', redirectTo: 'users' }, // default route
        ]
      },
      {
        path: 'statistics',
        children: [
        ]
      },
      { path: '', pathMatch: 'full', redirectTo: 'trips' }
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
