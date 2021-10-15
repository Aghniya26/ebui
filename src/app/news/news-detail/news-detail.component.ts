import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import {NewsApiService} from '../news-api.service';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  result: News[]=[];
   id:number=0;

  constructor( private route:ActivatedRoute, private rest:NewsApiService, public router:Router) {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    this.rest.getDataById(this.id).subscribe(
      data=>{
        console.log(data);
        this.result=data;
      })
   }

  ngOnInit(): void {


  }
  updateNews(){
    this.router.navigate(['news/update-news', this.id])
  }

  deleteNews(){
    this.rest.deleteData(this.id).subscribe(
      data=>{
        console.log(data);
      })
    this.router.navigateByUrl('news')
  }
}
