import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['../RegLayout/reg.component.css']
})
export class SignupComponent implements OnInit {
  reactiveForm: any;
  isMatchedPassword: boolean = true;
  databaseError: boolean = false;
  usedEmail: boolean = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) { }
  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.minLength(6), Validators.required]]
    });
  }
  OnChangePassword() {
    this.isMatchedPassword = (this.ConfirmPassword() == this.Password()) ? true : false;
  }
  SubmitForm() {

    if (this.reactiveForm.valid) {
      var body = {
        name: this.Name(),
        email: this.Email(),
        password: this.Password()
      }
      this.http.post<any>('http://localhost:8080/register', body).subscribe(data => {
        if (data == 'Database Error') this.databaseError = true;
        else this.databaseError = false;
        if (data == 'Email was already used by someone') this.usedEmail = true;
        else this.usedEmail = false;
        if (data =='Success'){
          this.router.navigate(['/dashboard']);
        }
      })
    }

  }
  //#region Get Methods
  Name() {
    return this.reactiveForm.get('name').value;
  }
  Email() {
    return this.reactiveForm.get('email').value;
  }
  Password() {
    return this.reactiveForm.get('password').value;
  }
  ConfirmPassword() {
    return this.reactiveForm.get('confirmPassword').value;
  }
  //#endregion
}