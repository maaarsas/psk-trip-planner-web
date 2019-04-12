import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthenticationService} from '../_services/authentication.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  returnUrl: string;
  loading = false;
  showLoginErrorMessage = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onLoginSubmit(): void {
    // when a mobile browser does autocompletion, form validation is not triggered
    this.triggerFormValidation();

    if (!this.loginForm.valid) {
      return;
    }
    // indicate loading so the form can be disabled and loading animations shown
    this.loading = true;
    // using AuthService send a login request with user email and password
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
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

  private triggerFormValidation(): void {
    for (const control of this.loginForm.controls) {
      control.updateValueAndValidity();
    }
  }
}
