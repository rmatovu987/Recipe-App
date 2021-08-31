import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../auth.service";
import { AuthResponseData } from './../auth.service';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  form: FormGroup;
  isLoading = false;
  error: string = null;

  constructor(private authS: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authS.login(
        this.form.get("username").value,
        this.form.get("password").value
      );
    } else {
      authObs = this.authS
        .signUp(
          this.form.get("username").value,
          this.form.get("password").value
        );        
    }

    authObs.subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (err) => {
        this.error = err;
        this.isLoading = false;
      }
    );

    this.form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
