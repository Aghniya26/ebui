import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employees';
import { empInput } from 'src/app/models/imputemployees.model';
import {EmployeesApiService} from '../employees-api.service'


@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  result: Employee[]=[];
  id:number=0;

  constructor( private route:ActivatedRoute, private rest:EmployeesApiService, public router:Router) {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    this.rest.getDataById(this.id).subscribe(
      data=>{
        console.log(data);
        this.result=data;
      })
   }


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
      salary:form.value.salary,
    }
    this.rest.updateData(this.id,employee).subscribe(
      data=>{
        console.log(data);
      })
    this.router.navigateByUrl('emp')

  }

}
