import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  employeeEmail: string = ""
  employeePassword: string = ""

  //dependency injection
  constructor(private route: Router,private ds:DataService){}

  //route: variable name - any variable name can be applied

  login(){
    if(!this.employeeEmail || !this.employeePassword){
      Swal.fire({
        title: 'Ooops!',
        text: 'Please fill the form completely',
        icon: 'info',
        
      })
      
    }
    else{
      this.ds.employeeEmail = this.employeeEmail;
      this.ds.employeePassword = this.employeePassword
      Swal.fire({
        title: 'success',
        text: 'Logged in successfully',
        icon: 'success',
        
      })
      this.route.navigateByUrl('/dashboard') 
    }
   
  }

}
