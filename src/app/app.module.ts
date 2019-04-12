import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TripService } from './_services/trip.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyTripsComponent } from './trips/my-trips/my-trips.component';
import { InvitationsComponent } from './trips/invitations/invitations.component';
import { TripCreateComponent } from './planning/trip-create/trip-create.component';
import { TripEditComponent } from './planning/trip-edit/trip-edit.component';
import { MyOrganizedTripsComponent } from './planning/my-organized-trips/my-organized-trips.component';
import { AllTripsComponent } from './planning/all-trips/all-trips.component';
import { UsersComponent } from './admin/users/users.component';
import { OfficesComponent } from './admin/offices/offices.component';
import { TripFormComponent } from './forms/trip-form/trip-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    LoginComponent,
    TripListComponent,
    MyTripsComponent,
    InvitationsComponent,
    TripCreateComponent,
    TripEditComponent,
    MyOrganizedTripsComponent,
    AllTripsComponent,
    UsersComponent,
    OfficesComponent,
    TripFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    TripService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
