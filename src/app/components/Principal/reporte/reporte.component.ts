import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";
import { NgFor } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [NgApexchartsModule,NgFor],
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;
  public savings: any[] = [];
  public expenses: any[] = [];

  constructor(private http: HttpClient) {
    this.chartOptions = {
      series: [],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: []
      }
    };
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    /*this.http.get<any>('assets/data.json').subscribe(data => {
      this.savings = data.savings;
      this.expenses = data.expenses;
      this.updateChartOptions();
    });*/

  }

  updateChartOptions(): void {
    this.chartOptions.series = [
      {
        name: "Savings",
        data: this.savings.map(s => s.amount)
      },
      {
        name: "Expenses",
        data: this.expenses.map(e => e.amount)
      }
    ];
    this.chartOptions.xaxis.categories = this.savings.map(s => s.date);
  }
}