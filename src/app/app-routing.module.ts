import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthService } from './services/auth.service';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { StatusPageComponent } from './components/status-page/status-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path: 'admin',component:AdminComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path: 'loandetails',component:LoanDetailsComponent},
  {path: 'statuspage',component:StatusPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
