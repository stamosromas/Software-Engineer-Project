import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PayFormComponent } from '../app/payment/pay-form/pay-form.component';
import { HeaderComponent } from '../app/basic-parts/header/header.component';
import { SignUpComponent } from '../app/accounts-manager/sign-up/sign-up.component';
import { SignInComponent } from '../app/accounts-manager/sign-in/sign-in.component';
import { LoadComponent } from '../app/payment/load/load.component';
import { ShowDataComponent } from '../app/info-presentator/show-data/show-data.component';
import { TimeComponent } from '../app/info-presentator/time-date/time/time.component';
import { DateComponent } from '../app/info-presentator/time-date/date/date.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResetPasswordComponent } from '../app/accounts-manager/reset-password/reset-password.component';
import { LinkerComponent } from './linker/linker.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ChartsComponent } from './charts/charts.component';
import { FooterComponent } from './basic-parts/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { ChartsModule } from 'ng2-charts';
//C:\Users\sromas\Desktop\Project\Front-end\src\app\info-presentator



@NgModule({
  declarations: [
    AppComponent,
    PayFormComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    LoadComponent,
    ShowDataComponent,
    TimeComponent,
    DateComponent,
    ResetPasswordComponent,
    LinkerComponent,
    HomePageComponent,
    ChartsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot() ,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
