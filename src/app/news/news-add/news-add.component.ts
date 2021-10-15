import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { newsInput } from 'src/app/models/inputnews.model';
import {NewsApiService} from '../news-api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {

  constructor(private rest:NewsApiService,  private router:Router) { }

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
    this.rest.postData(news).subscribe(
      data=>{
        console.log(data);
      })
    this.router.navigateByUrl('news')

  }

}
