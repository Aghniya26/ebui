import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component'
import {EmployeeAddComponent} from './employee-add/employee-add.component'
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component'
import {EmployeeUpdateComponent} from './employee-update/employee-update.component'

const routes: Routes = [
  {path: 'employee', component: EmployeeListComponent},
  {path: 'employee/add-emp', component: EmployeeAddComponent},
  {path: 'employee/detail-emp/:id', component: EmployeeDetailComponent},
  {path: 'employee/update-emp/:id', component: EmployeeUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
