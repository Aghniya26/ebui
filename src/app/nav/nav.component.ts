import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {  ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  currentRoute: string='';
  menuItems=[
    {url: 'dashboard', icon:'dashboard.png'},
    {url: 'news', icon:'news.png'},
    {url: 'employee', icon:'employee.png'},
    {url: 'twitter', icon:'twitter.png'}];

  logo="assets/dashboard/Frame 5695.png";
  search="assets/dashboard/toolbars/search.png";
  bell="assets/dashboard/toolbars/bell.png";
  line="assets/dashboard/toolbars/line.png";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    router.events.subscribe((url:any) => console.log(url));
    console.log(router.url.split('?')[0]);  // to print only path eg:"/login"
    this.currentRoute=router.routerState.snapshot.url;
  }


}
