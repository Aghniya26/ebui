import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../news-api.service';
import { Router, RouterLink } from '@angular/router';
import { News } from 'src/app/models/news.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']

})
export class NewsListComponent implements OnInit {

  result: News[]=[];
  etc:string="....";
  page = 1;
  passenger: any;
  itemsPerPage = 9;
  totalItems : any;
  inputSearch:any;
  data=[
    {img: 'image 1.jpg', name:'MetroTV News', views: '36.7k'},
    {img: 'image 2.jpg', name:'Kompas TV', views: '99.2k'},
    {img: 'image 3.jpg', name:'Inews', views: '67.3k'},
    {img: 'image 4.jpg', name:'TVOne', views: '30k'},
    {img: 'image 5.jpg', name:'RCTI', views: '83k'},
    {img: 'image 6.jpg', name:'CNN', views: '100.1k'},
  ];

  // mediaNews=['image 1.jpg', 'image 2.jpg', 'image 3.jpg', 'image 4.jpg', 'image 5.jpg', 'image 6.jpg'];
  // mediaNewsTitle=['MetroTV News', 'Kompas TV', 'INews', 'TVOne', 'RCTI', 'CNN Indonesia'];


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
  return day + ' ' + month + ' ' + year;
}
searchByTitle(){
  if(this.inputSearch==""){
    location.reload();
  }else{
    this.rest.searchByTitle(this.inputSearch).subscribe(
      data=>{
        console.log(data);
        this.result=data;
        this.router.navigateByUrl('news')
      });
  }
}

}

