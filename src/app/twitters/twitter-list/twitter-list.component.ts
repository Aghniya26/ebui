import { Component, OnInit } from '@angular/core';
import {TwittersApiService} from '../twitters-api.service'
import { Router, RouterLink } from '@angular/router';
import { Twitter } from 'src/app/models/twitter.model';

@Component({
  selector: 'app-twitter-list',
  templateUrl: './twitter-list.component.html',
  styleUrls: ['./twitter-list.component.css']
})
export class TwitterListComponent implements OnInit {

  result: Twitter[]=[];
  page = 1;
  passenger: any;
  itemsPerPage = 6;
  totalItems : any;
  inputSearch:any;

  constructor(
    private rest:TwittersApiService,
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

  detailTwt(id:number){
    this.router.navigate(["twt/detail-twt", id]);
  }

  deleteTwt(id:number){
    this.rest.deleteData(id).subscribe(
      data=>{
        console.log(data);
      })
    this.router.navigate(["twt"]);
  }

  updateTwt(id:number){
    this.router.navigate(["twt/update-twt", id]);
  }


  addTwt(){
    this.router.navigate(["twt/add-twt"]);
}

// formatDate(value:any) {
//   let date = new Date(value);
//   const day = date.toLocaleString('default', { day: '2-digit' });
//   const month = date.toLocaleString('default', { month: 'short' });
//   const year = date.toLocaleString('default', { year: 'numeric' });
//   return day + '-' + month + '-' + year;
// }



}
