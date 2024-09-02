import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  empEmail:string = ""
  empPass : string = ""

  //structural directive
  showLogoutButton:Boolean = false;
//*ngIf
  employeeDetails:any = [
    {name:"jithin",age:"40",role:"developer"},
    {name:"hari",age:"30",role:"back end developer"},
    {name:"joji",age:"43",role:"tester"},
    {name:"sulthan",age:"23",role:"tester"},
  ]

  constructor(private route: Router, private ds: DataService) {
    this.empEmail = this.ds.employeeEmail
    this.empPass = this.ds.employeePassword
   }
  
  dashboard() {
    this.route.navigateByUrl('/login')
  }

}
