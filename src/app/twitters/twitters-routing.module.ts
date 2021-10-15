import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TwitterListComponent} from './twitter-list/twitter-list.component'
import {TwitterAddComponent} from './twitter-add/twitter-add.component'
import {TwitterDetailComponent} from './twitter-detail/twitter-detail.component'
import {TwitterUpdateComponent} from './twitter-update/twitter-update.component'
const routes: Routes = [
  {path: 'twitter', component: TwitterListComponent},
  {path: 'twitter/add-twt' , component: TwitterAddComponent},
  {path: 'twitter/detail-twt/:id', component: TwitterDetailComponent},
  {path: 'twitter/update-twt/:id', component: TwitterUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwittersRoutingModule { }
