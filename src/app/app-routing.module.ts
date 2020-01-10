import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyadsComponent } from './pages/myads/myads.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { ForgotpasswordComponent } from './forms/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './forms/resetpassword/resetpassword.component';
import { AdddetailsComponent } from './pages/adddetails/adddetails.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'myads',component:MyadsComponent},
  {path:'inbox',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'adddetails',component:AdddetailsComponent},
  {path:'adddetails/:sek',component:AdddetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
