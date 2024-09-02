import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { DataService } from '../services/data.service';
import { RegisterDataService } from '../services/register-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  employeeName:string = ""
  employeeEmail:string=""
  employeePassword:string= ""
  constructor(private route : Router, private ds : RegisterDataService){}
  register(){
    //alert(`${this.employeeName},${this.employeePassword},${this.employeeEmail}`)
    if(!this.employeeName || !this.employeeEmail || !this.employeePassword){
      Swal.fire({
        title: 'Ooops!',
        text: 'Please fill the form completely',
        icon: 'info',
        
      })
    }
    else{
      this.ds.empName = this.employeeName
      this.ds.empEmail = this.employeeEmail
      this.ds.empPassword = this.employeePassword
      Swal.fire({
        title: 'success',
        text: 'User Registered successfully',
        icon: 'success',
        
      })
      
    
      this.route.navigateByUrl('/register-details')
    }

    

  }

}
