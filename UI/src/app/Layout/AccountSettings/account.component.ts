import { Component,HostListener } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
selector:'account-component',
templateUrl:'./account.component.html',
styleUrls:['./account.component.css']

})
export class AccountComponent{
    personalImage : String ='';
    imageResponse : String ='';
    username : String = '';
    useremail : String = '';
    location : String = '';
    password : String ='';
    phone : String = '';
    newPhone : String ='';
    phoneResponse : String ='';
     userID :string = '' ;
     showAccountInfo : boolean =true;
     showStorage : boolean =true;
     showMonth : boolean =true;

     dashboardElement : string = 'DashboardElement';
isAccountChecked : boolean = true;
date : String ='';
    constructor(private http: HttpClient,private router: Router){}
    ngOnInit(){  
        if (sessionStorage.getItem('id')) {
          this.userID = sessionStorage.getItem('id') || '';
          this.DrawAccountInfo();
        } else {
          this.router.navigate(['/login']);
        } 
    }
    uploadFiles(event: any) {

var formData = new FormData();
formData.append('image',event.target!.files[0]);
this.http.post<any>('http://localhost:8081/uploadImage',formData).subscribe(data => {
  console.log( 'File Size : ', (data));
});


  } 
    DrawAccountInfo(){
        var body = { id: this.userID}
        this.http.post<any>('http://localhost:8081/getUserInfo',body).subscribe(data => {
         this.personalImage = '/assets/PersonalImages/' + data.image;
         this.location = data.location;
         this.phone = data.phone;
         this.username = data.name;
         this.useremail = data.email;
         this.password = data.password;
     });
     
    }
   
    RemoveImage(){
      var defaultImage= '/assets/PersonalImages/user.png';
      this.personalImage = defaultImage;
      var body = { id: this.userID}
      this.http.post<any>('http://localhost:8081/removeImage',body).subscribe(data => {
        this.imageResponse = data;
      });
    }
    ChangePhone()
    {
      var body = { newPhone: this.newPhone,id: this.userID}
      this.http.post<any>('http://localhost:8081/changePhone',body).subscribe(data => {
        this.phoneResponse = data;
      });    
    }
}