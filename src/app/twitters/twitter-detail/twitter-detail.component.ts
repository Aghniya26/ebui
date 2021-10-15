import { Component, OnInit } from '@angular/core';
import {TwittersApiService} from '../twitters-api.service'
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Twitter } from 'src/app/models/twitter.model';

@Component({
  selector: 'app-twitter-detail',
  templateUrl: './twitter-detail.component.html',
  styleUrls: ['./twitter-detail.component.css']
})
export class TwitterDetailComponent implements OnInit {

  result: Twitter[]=[];
  id:number=0;

 constructor( private route:ActivatedRoute, private rest:TwittersApiService, public router:Router) {
   this.id= Number(this.route.snapshot.paramMap.get('id'));
   this.rest.getDataById(this.id).subscribe(
     data=>{
       console.log(data);
       this.result=data;
     })
  }

 ngOnInit(): void {


 }

}
