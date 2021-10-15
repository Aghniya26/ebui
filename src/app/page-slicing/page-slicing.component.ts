import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-page-slicing',
  templateUrl: './page-slicing.component.html',
  styleUrls: ['./page-slicing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageSlicingComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
      this.document.body.classList.add('bodybg-color');
      // OR you can Add inline style css with the help of code below
      // this._document.body.style.background = '#fff';
  }
    ngOnDestroy() {
      // remove the class form body tag
      this.document.body.classList.remove('bodybg-color');
    }

}
