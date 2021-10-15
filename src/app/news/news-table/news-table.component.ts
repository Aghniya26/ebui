import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../news-api.service';
import { Router, RouterLink } from '@angular/router';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css']
})
export class NewsTableComponent implements OnInit {

  result: News[]=[];
  page = 1;
  itemsPerPage = 3;
  totalItems : any;

  constructor(
    private rest:NewsApiService,
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

  detailNews(id:number){
      this.router.navigate(["news/detail-news", id]);
  }

  addNews(){
    this.router.navigate(["news/add-news"]);
}

formatDate(value:any) {
  let date = new Date(value);
  const day = date.toLocaleString('default', { day: '2-digit' });
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return day + '-' + month + '-' + year;
}


}
