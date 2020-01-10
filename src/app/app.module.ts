import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdComponent } from './pages/ad/ad.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { MyadsComponent } from './pages/myads/myads.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { ForgotpasswordComponent } from './forms/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './forms/resetpassword/resetpassword.component';
import { HeaderComponent}     from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AdddetailsComponent } from './pages/adddetails/adddetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdComponent,
    InboxComponent,
    MyadsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    HeaderComponent,
    FooterComponent,
    AdddetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
