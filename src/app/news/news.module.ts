import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsUpdateComponent } from './news-update/news-update.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NewsTableComponent } from './news-table/news-table.component';


@NgModule({
  declarations: [
    NewsListComponent,
    NewsAddComponent,
    NewsDetailComponent,
    NewsUpdateComponent,
    NewsTableComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule

  ], exports:[
    NewsTableComponent
  ]
})
export class NewsModule { }
