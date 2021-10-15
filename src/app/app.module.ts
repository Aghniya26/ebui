import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {EmployeesModule} from './employees/employees.module';
import {NewsModule} from './news/news.module';
import {TwittersModule} from './twitters/twitters.module';
import { AppRoutingModule } from './app-routing.module';
import { PageSlicingComponent } from './page-slicing/page-slicing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { HistogramComponent } from './charts/histogram/histogram.component';
import { DonutComponent } from './charts/donut/donut.component';
import { ChartsModule } from 'ng2-charts';
import { Mini1Component } from './minicards/mini1/mini1.component';
import { MytopicsComponent } from './table/mytopics/mytopics.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageSlicingComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    HistogramComponent,
    DonutComponent,
    Mini1Component,
    MytopicsComponent
    ],
  imports: [
    BrowserModule,
    EmployeesModule,
    NewsModule,
    TwittersModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
