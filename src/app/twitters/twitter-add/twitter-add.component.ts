import { Component, OnInit } from '@angular/core';
import {TwittersApiService} from '../twitters-api.service'
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Twitter } from 'src/app/models/twitter.model';
import { NgForm } from '@angular/forms';
import { twtInput } from 'src/app/models/inputtwitter';

@Component({
  selector: 'app-twitter-add',
  templateUrl: './twitter-add.component.html',
  styleUrls: ['./twitter-add.component.css']
})
export class TwitterAddComponent implements OnInit {

  constructor(private route:ActivatedRoute, private rest:TwittersApiService, public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    let twt: twtInput={
      name:form.value.name,
      username:form.value.username,
      date:new Date(),
      text:form.value.text,
      link_image:form.value.link_image,
      reply:form.value.reply,
      like:form.value.like,
      retweet:form.value.retweet,
    }
    this.rest.postData(twt).subscribe(
      data=>{
        console.log(data);
      })
    this.router.navigateByUrl('twt')

  }
}
