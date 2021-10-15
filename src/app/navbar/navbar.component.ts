
import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo: String="assets/images/Logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
