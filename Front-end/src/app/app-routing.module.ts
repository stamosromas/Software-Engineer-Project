import { NgModule } from "@angular/core";
import {Routes,RouterModule, Router} from '@angular/router';
import { ResetPasswordComponent } from "./accounts-manager/reset-password/reset-password.component";
import { SignInComponent } from "./accounts-manager/sign-in/sign-in.component";
import { SignUpComponent } from "./accounts-manager/sign-up/sign-up.component";
import { ChartsComponent } from "./charts/charts.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { LinkerComponent } from "./linker/linker.component";
import { LoadComponent } from "./payment/load/load.component";
import { PayFormComponent } from "./payment/pay-form/pay-form.component";

const appRoutes:Routes=[
    {path:'',redirectTo:'/main',pathMatch:'full'},
    {path:'main',component:LinkerComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'reset-password',component:ResetPasswordComponent},
    {path:'load',component:LoadComponent},
    {path:'pay-form',component:PayFormComponent},
    {path:'home-page',component:HomePageComponent},
    {path:'charts',component:ChartsComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}