import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PageSlicingComponent} from './page-slicing/page-slicing.component'
import {DashComponent} from './dash/dash.component'
import {HistogramComponent} from './charts/histogram/histogram.component'
import {Mini1Component} from './minicards/mini1/mini1.component';
import {MytopicsComponent} from './table/mytopics/mytopics.component'

const routes: Routes = [
{path: 'slicing', component: PageSlicingComponent},
 {path: 'dashboard', component: DashComponent},
 {path: 'dashboard/charts/histogram', component:HistogramComponent },
 {path: 'mini', component:Mini1Component },
 {path: 'mytopic', component: MytopicsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
