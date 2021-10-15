import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component'
import {NewsAddComponent} from './news-add/news-add.component'
import {NewsDetailComponent} from './news-detail/news-detail.component'
import {NewsUpdateComponent} from './news-update/news-update.component'
import {NewsTableComponent} from './news-table/news-table.component'
const routes: Routes = [
  {path: 'news', component: NewsListComponent},
  {path: 'news/detail-news/:id', component: NewsDetailComponent},
  {path: 'news/update-news/:id', component: NewsUpdateComponent},
  {path: 'news/add-news', component: NewsAddComponent},
  {path: 'news/table-news', component: NewsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
