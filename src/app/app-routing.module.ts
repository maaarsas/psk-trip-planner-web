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
    component: HomeComponent,
    children: [
      {
        path: 'trips',
        children: [
          { path: 'my-trips', component: MyTripsComponent },
          { path: 'invitations', component: InvitationsComponent },
          { path: '', pathMatch: 'full', redirectTo: 'my-trips' },
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
