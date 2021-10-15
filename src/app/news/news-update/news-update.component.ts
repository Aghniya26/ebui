import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import {NewsApiService} from '../news-api.service';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { newsInput } from 'src/app/models/inputnews.model';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent implements OnInit {
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

  onSubmit(form:NgForm){
    let news: newsInput={
      title_news: form.value.title_news,
      link_image: form.value.link_image,
      content: form.value.content,
      media_name: form.value.media_name,
      date: new Date()
    }
    this.rest.updateData(this.id,news).subscribe(
      data=>{
        console.log(data);
      })
    this.router.navigateByUrl('news')

  }
}
