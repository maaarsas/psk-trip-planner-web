import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: any = {
    email: '',
    password: '',
  };
  returnUrl: string;
  loading = false;
  showLoginErrorMessage = false;

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLoginSubmit(): void {
    // indicate loading so the form can be disabled and loading animations shown
    this.loading = true;
    // using AuthService send a login request with user email and password
    this.authService.login(this.credentials.email, this.credentials.password)
      .pipe(first())
      .subscribe(
        data => {
          // successful login, return user to the page where he came from to this form
          this.router.navigate([this.returnUrl]);
          this.loading = false;
        },
        error => {
          this.showLoginErrorMessage = true;
          this.loading = false;
        }
      );
  }
}
