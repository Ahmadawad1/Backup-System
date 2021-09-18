import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RoutingModule} from './routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Registrastion/SignIn/signin.component';
import { SignupComponent } from './Registrastion/SignUp/signup.component';
import { RegComponent } from './Registrastion/RegLayout/reg.component';
import { LayoutComponent } from './Layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Layout/Dashboard/dashboard.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AccountComponent } from './Layout/AccountSettings/account.component';
import { AboutComponent } from './Layout/AboutUs/about.component';
import { FilesComponent } from './Layout/FilesManager/files.component';
import { ContactComponent } from './Layout/ContactUs/contact.component';
import { FeedbackComponent } from './Layout/Feedback/feedback.component';
import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,SigninComponent,SignupComponent,RegComponent,LayoutComponent,ContactComponent,FeedbackComponent,DashboardComponent,AccountComponent,AboutComponent,FilesComponent
  ],
  imports: [
    BrowserModule,FileUploadModule,RoutingModule,ReactiveFormsModule,HttpClientModule,GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
