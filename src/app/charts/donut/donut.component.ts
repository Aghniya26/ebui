import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doughnutChartLabels: Label[] = ['Kompas', 'Okezone', 'Detik'];
  doughnutChartData: MultiDataSet = [
    [53, 30, 17]
  ];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [

    { // dark grey
      backgroundColor: ['rgb(192, 57, 43)', 'rgb(103, 128, 159)','rgb(242, 241, 239)' ]

    }
  ];

  doughnutChartLegend = true;

}
