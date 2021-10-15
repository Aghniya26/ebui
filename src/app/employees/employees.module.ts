import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class EmployeesModule { }
