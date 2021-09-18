import { Component,HostListener } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
selector:'layout-component',
templateUrl:'./layout.component.html',
styleUrls:['./layout.component.css']

})
export class LayoutComponent{
 imageSource : String ="https://www.nicepng.com/png/full/502-5024580_business-data-storage-icon.png";
 sideBarSize : String ='smallSideBar';
 tabsTitle : String = 'hide';
 copyRights : String = 'hide';
 safeStorage : String = 'hide';
 contentsAndHeaders : String = 'largeContents';
 imageLogo : String = 'imageSize';
 header : String = 'header';
 showSearchBox : boolean =false;
 showLang : boolean =false;
 showAccount: boolean =false;
 showFullSideBar : boolean = false;
 showQuickActions : boolean =false;
 isSearchBoxShow = false;
 isPinned : boolean = false;
 pinIcon : String = 'bi bi-pin-angle-fill Icon';
 dashboardTab : boolean = true;
 filesTab : boolean = false;
 accountTab : boolean = false;
 aboutTab : boolean = false;
 contactTab : boolean = false;
 iconsContainer : String ='IconsContainer';
 personalImage : String ='';
 username : String = '';
 useremail : String = '';
 constructor(private router: Router,private http: HttpClient){}
ngOnInit(){  
 if(sessionStorage.getItem('id')){  
  this.DrawAccountInfo();   
 }
 else{
   this.router.navigate(['/login']);     
 }
}
UneffectTabs(){
  this.dashboardTab  = false;
  this.filesTab  = false;
  this.accountTab  = false;
  this.aboutTab  = false;
  this.contactTab  = false;
}
DrawAccountInfo(){
  var body = { id: sessionStorage.getItem('id')}
  this.http.post<any>('http://localhost:8081/getUserInfo',body).subscribe(data => {
   this.personalImage = '/assets/PersonalImages/' + data.image;  
   this.username = data.name;
   this.useremail = data.email;
});
}
 ToggleSearchBox(){
  this.showSearchBox = !this.showSearchBox;
 }
 ToggleFullBar(){
   this.showFullSideBar = !this.showFullSideBar;
 }
 ToggleQuickActions(){
  this.showQuickActions = !this.showQuickActions;
 }
  ToggleLang(){
  this.showLang = !this.showLang;
 }GotoSettings(){
  this.router.navigateByUrl('/accountSettings');
}
GotoFeedback(){
  this.router.navigateByUrl('/feedback');
}GotoAbout(){
  this.UneffectTabs();
  this.router.navigateByUrl('/aboutus');
}
SignOut(){
  sessionStorage.clear();
  this.router.navigateByUrl('/login');

}
 ToggleAccount(){
  this.showAccount = !this.showAccount;
 }
SideBarHover(){
  if(!this.isPinned)
  {
       this.sideBarSize ='largeSideBar';
       this.tabsTitle = 'showInline'; 
       this.copyRights = 'show';
       this.safeStorage = 'show';
  }
}
SideBarOut(){
  if(!this.isPinned){
    this.copyRights = 'hide';
    this.sideBarSize ='smallSideBar';
    this.tabsTitle = 'hide';
     this.safeStorage = 'hide';
    } 
}
ClickDashboard(){ 
  this.UneffectTabs();
  this.dashboardTab = true;
  this.router.navigateByUrl('/dashboard');
}
ClickFilesManager(){ 
  this.UneffectTabs();
  this.filesTab = true;
  this.router.navigateByUrl('/filesManager');
}
ClickAccountSettings(){
  this.UneffectTabs();
  this.accountTab = true;
  this.router.navigateByUrl('/accountSettings');
}
ClickFB(){
  this.router.navigateByUrl('/contactUs/feedback');
}
ClickContactUs(){
  this.UneffectTabs();
  this.contactTab = true;
  this.router.navigateByUrl('/contactUs');

}
ClickAboutUs(){
  this.UneffectTabs();

  this.aboutTab = true;
  this.router.navigateByUrl('/aboutUs');

}
Pin(){
 
  if(!this.isPinned)
  { 
    this.pinIcon  = 'bi bi-pin-angle-fill Icon pinned';
    this.isPinned = true;
    this.SideBarHover();
    this.iconsContainer = 'IconsContainer2';
    this.contentsAndHeaders = 'smallContents';

}
  else this.UnPin();
  
}
UnPin(){ 
  this.pinIcon  = 'bi bi-pin-angle-fill Icon';
  this.isPinned =false;
  this.iconsContainer = 'IconsContainer';
  this.contentsAndHeaders = 'largeContents';
}
}