import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employees';
import { EmployeesApiService } from '../employees-api.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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

}
