import { Component } from "@angular/core";
import { ChartType } from "angular-google-charts";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
selector:'dashboard-component',
templateUrl:'./dashboard.component.html',
styleUrls:['./dashboard.component.css']

})
export class DashboardComponent
{ 

    personalImage : String ='';
    username : String = '';
    useremail : String = '';
    location : String = '';
    phone : String = '';
     userID :String = '' ;
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
          console.log('UserID : ' + this.userID);
          this.DrawAccountInfo();
          this.DrawStorageChart();
          this.FillDate();
          this.dashboardElement = this.showAccountInfo ? 'DashboardElement' :'DashboardElement2';
        } else {
          this.router.navigate(['/login']);
        } 
    }
    //#region Storage Chart
    storageChartData = [['Used Space', 30], ['Free Space', 70]];
    storageChartColumns = ['Storage', 'Size'];
    storageChartOptions = { colors: ['#3699FF', '#bfd8e7'], is3D: false };
    storageChartType: ChartType = ChartType.BarChart;
    //#endregion
    //#region Last Month Chart
    actionChartData = [['Jan', 50], ['Aug', 10]];
    actionChartColumns = ['Last Month', ''];
    actionChartOptions = { colors: ['#3699FF', '#bfd8e7'], is3D: false };
    actionChartType: ChartType = ChartType.LineChart;
    //#endregion
//#region Draw Components
DrawStorageChart(){
    
}

FillDate(){
  var d = new Date();
  var months : String[] = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
this.date = d.getDate() + ', ' + months[(d.getUTCMonth()+1)];
}
 DrawAccountInfo(){
    var body = { id: this.userID}
    this.http.post<any>('http://localhost:8081/getUserInfo',body).subscribe(data => {
     this.personalImage = '/assets/PersonalImages/' + data.image;
     this.location = data.location;
     this.phone = data.phone;
     this.username = data.name;
     this.useremail = data.email;
 });
}
//#endregion
ManageSections(){
if(this.isAccountChecked){
  this.ShowAccountInfo();
}
else {
  this.HideAccountInfo();
}
}
GotoSettings(){
  this.router.navigateByUrl('/accountSettings');
}
ChangeCheckBox(){
this.isAccountChecked = !this.isAccountChecked;
}
HideAccountInfo(){
  this.showAccountInfo = !this.showAccountInfo;
  this.isAccountChecked = false;
  this.dashboardElement = 'DashboardElement2';
}
ShowAccountInfo(){
  this.showAccountInfo = true;
  this.isAccountChecked = true;
  this.dashboardElement = 'DashboardElement';
}
}
