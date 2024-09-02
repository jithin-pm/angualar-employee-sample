import { Component } from '@angular/core';
import { Router } from 'express';
import { RegisterDataService } from '../services/register-data.service';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})

export class RegisterDetailsComponent {
  employeeName:string =""
  employeeEmail:string=""
  employeePassword:string=""
  constructor(private ds : RegisterDataService){
    this.employeeName=this.ds.empName
    this.employeeEmail=this.ds.empEmail
    this.employeePassword=this.ds.empPassword
  }
 
  products:any= [
    {productId:"1",productName: "santhoor",edition:"sandal",price:"25"},
    {productId:"2",productName: "Lux",edition:"rose",price:"55"},
    {productId:"3",productName: "cuteee",edition:"olive",price:"15"}
    , {productId:"5",productName: "dove",edition:"milk",price:"70"},
    {productId:"6",productName: "life boy",edition:"antibody",price:"45"}


  ]
}
