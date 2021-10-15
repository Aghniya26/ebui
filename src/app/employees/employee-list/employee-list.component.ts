import { Component, OnInit } from '@angular/core';
import {EmployeesApiService} from '../employees-api.service'
import { Router, RouterLink } from '@angular/router';
import { Employee } from 'src/app/models/employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  result: Employee[]=[];
  page = 1;
  passenger: any;
  itemsPerPage = 8;
  totalItems : any;
  inputSearch:any;

  constructor(
    private rest:EmployeesApiService,
    public router: Router
  ){  this.rest.getData().subscribe(
    data=>{
      console.log(data);
      this.result=data;
      this.totalItems=data.length;
    });


  };

  ngOnInit():void{

  }

  detailEmp(id:number){
    this.router.navigate(["employee/detail-emp", id]);
  }

  deleteEmp(id:number){
    this.rest.deleteData(id).subscribe(
      data=>{
        console.log(data);
      })
    this.router.navigateByUrl('employee')
  }

  updateEmp(id:number){
    this.router.navigate(["employee/update-emp", id]);
  }


  addEmployee(){
    this.router.navigate(["employee/add-emp"]);
}

formatDate(value:any) {
  let date = new Date(value);
  const day = date.toLocaleString('default', { day: '2-digit' });
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return day + '-' + month + '-' + year;
}


}
