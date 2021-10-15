import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  // dashboard.component.js

cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
   map(({ matches }) => {
     if (matches) {
       return {
         summaryColumns: 4,
         contentColumns: 3,
         miniCard: { cols: 1, rows: 1 },
         chart: { cols: 1, rows: 2 },
         table: { cols: 2, rows: 2 },
       };
     }

    return {
      //  columns: 4,
      //  miniCard: { cols: 1, rows: 1 },
      //  chart: { cols: 2, rows: 2 },
      //  table: { cols: 4, rows: 4 },
      summaryColumns: 4,
      contentColumns: 3,
      miniCard: { cols: 1, rows: 1 },
      chart: { cols: 1, rows: 2 },
      table: { cols: 2, rows: 2 },
     };
   })
 );

  contentCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 4', cols: 2, rows: 1 },
          { title: 'Card 6', cols: 1, rows: 1 },
          { title: 'Card 7', cols: 2, rows: 1 },
          { title: 'Card 8', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 4', cols: 2, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 },
        { title: 'Card 7', cols: 2, rows: 1 },
        { title: 'Card 8', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
