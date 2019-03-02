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

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  username: string;
  password: string;
  returnUrl: string;
  showSpinner: boolean;
  showLoginError: boolean;

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.showSpinner = false;
  }

  login(): void {
    this.showLoginError = false;
    this.showSpinner = true;

    this.authService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.showSpinner = false;
        },
        error => {
          this.showSpinner = false;
          this.showLoginError = true;
        });
  }
}
