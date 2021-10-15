import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [2,7,3,2,4,3,2,1,1,4,5,6], label: 'Day' },
    { data: [2,2,3,2,4,3,2,1,1,4,5,6], label: 'Month' },
    { data: [2,2,4,2,6,3,2,7,3,4,5,6], label: 'Year' }
  ];

  barChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(65, 131, 215, 1)',
      borderColor: 'rgba(197, 239, 247, 1)',
    }
  ];

}
