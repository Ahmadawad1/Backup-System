import {  NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SignupComponent } from 'src/app/Registrastion/SignUp/signup.component';
import { SigninComponent } from 'src/app/Registrastion/SignIn/signin.component';
import { RegComponent } from './Registrastion/RegLayout/reg.component';
import { LayoutComponent } from './Layout/layout.component';
import { DashboardComponent } from './Layout/Dashboard/dashboard.component';
import { AccountComponent } from './Layout/AccountSettings/account.component';
import { AboutComponent } from './Layout/AboutUs/about.component';
import { FilesComponent } from './Layout/FilesManager/files.component';
import { ContactComponent } from './Layout/ContactUs/contact.component';
import { FeedbackComponent } from './Layout/Feedback/feedback.component';
const  routes:  Routes  = [
    {
        path:  '',
        component:  RegComponent,
        children: [
            {
                path:  'login',
                component: SigninComponent
            }
        ]
    },
    {
        path:  '',
        component:  RegComponent,
        children: [
            {
                path:  'register',
                component: SignupComponent
            }
        ]
    },
    {
        path:  '',
        component:  LayoutComponent,
        children: [
            {
                path:  'dashboard',
                component: DashboardComponent
            },
            {
                path:  'filesManager',
                component: FilesComponent
            }
            ,
            {
                path: 'accountSettings',
                component: AccountComponent
            },
            {
                path:  'aboutUs',
                component: AboutComponent
            },
            {
                path:  'contactUs',
                component: ContactComponent,
                children :[{path:'feedback',component: FeedbackComponent}]
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule{
    
}
