import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employees';
import { empInput } from 'src/app/models/imputemployees.model';
import {EmployeesApiService} from '../employees-api.service'

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private route:ActivatedRoute, private rest:EmployeesApiService, public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    let employee: empInput={
      first_name:form.value.first_name,
      last_name:form.value.last_name,
      email:form.value.email,
      phone:form.value.phone,
      organization:form.value.organization,
      designation:form.value.designation,
      salary:form.value.salary
    }
    this.rest.postData(employee).subscribe(
      data=>{
        console.log(data);
      })
    this.router.navigateByUrl('employee')

  }
  }
