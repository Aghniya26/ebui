import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytopics',
  templateUrl: './mytopics.component.html',
  styleUrls: ['./mytopics.component.css']
})
export class MytopicsComponent implements OnInit {
 element=['koruptor', 'bansos', 'corona', 'isoman']
  constructor() { }

  ngOnInit(): void {
  }

}
