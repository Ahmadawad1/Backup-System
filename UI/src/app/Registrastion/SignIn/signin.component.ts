import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'signin-comp',
  templateUrl: './signin.component.html',
  styleUrls: ['../RegLayout/reg.component.css']
})
export class SigninComponent {
  reactiveForm: any;
  rememberMe: boolean = false;
  databaseError: boolean = false;
  incorrectPassword: boolean = false;
  invalidEmail: boolean = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) { }
  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }

  SubmitForm() {
    if (this.reactiveForm.valid) {
      var body = {
        email: this.Email(),
        password: this.Password(),
        rememberMe: this.rememberMe
      }

      this.http.post<any>('http://localhost:8080/login', body).subscribe(data => {
        if (data == 'Database Error') this.databaseError = true;
        else this.databaseError = false;
        if (data == 'Incorrect Password') this.incorrectPassword = true;
        else this.incorrectPassword = false;
        if (data == 'Invalid Email') this.invalidEmail = true;
        else this.invalidEmail = false;
       if (data.length==24){
        sessionStorage.setItem('id', data);
          this.router.navigate(['/dashboard']);         
        }
      })
    }
  }
  CheckBox() {
    this.rememberMe = !this.rememberMe;
  }
  Email() {
    return this.reactiveForm.get('email').value;
  }
  Password() {
    return this.reactiveForm.get('password').value;
  }
}