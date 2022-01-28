import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { StatusPageComponent } from './components/status-page/status-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditComponent } from './components/edit/edit.component';
import { AuthService } from './services/auth.service';
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path: 'admin',component:AdminComponent,canActivate:[AuthService]},
  {path:'userprofile/:emailid',component:UserProfileComponent,canActivate:[AuthService]},
  {path: 'loandetails/:emailid',component:LoanDetailsComponent,canActivate:[AuthService]},
  {path: 'statuspage/:emailid',component:StatusPageComponent,canActivate:[AuthService]},
  {path: 'edit/:emailid',component:EditComponent,canActivate:[AuthService]},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }