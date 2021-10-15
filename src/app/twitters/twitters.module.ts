import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwittersRoutingModule } from './twitters-routing.module';
import { TwitterListComponent } from './twitter-list/twitter-list.component';
import { TwitterAddComponent } from './twitter-add/twitter-add.component';
import { TwitterDetailComponent } from './twitter-detail/twitter-detail.component';
import { TwitterUpdateComponent } from './twitter-update/twitter-update.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    TwitterListComponent,
    TwitterAddComponent,
    TwitterDetailComponent,
    TwitterUpdateComponent
  ],
  imports: [
    CommonModule,
    TwittersRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class TwittersModule { }
