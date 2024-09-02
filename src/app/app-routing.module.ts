import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';

const routes: Routes = [
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  }
  ,
  {
    path:'',component:LoginComponent
  },
  {
    path:'register-details',component:RegisterDetailsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
