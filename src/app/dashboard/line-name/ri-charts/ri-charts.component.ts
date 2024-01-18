import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ri-charts',
  templateUrl: './ri-charts.component.html',
  styleUrls: ['./ri-charts.component.scss']
})
export class RiChartsComponent {

  charts: any[] = [];

  ngOnInit(): void {
    this.createChart('myChart', '#FF9F1C');
    this.createChart('myCharttwo', '#FF5400');
    this.createChart('myChartthree', '#2EC4B6');
  }

  createChart(canvasId: string, color: string): void {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;

    const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 3', 'Label 3', 'Label 3', 'Label 3'];

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: [0, 150, 80, 225, 50,300, 1],
          backgroundColor: [color + '33'],
          borderColor: [color],
          tension: 0.5,
          capBezierPoints: true,
          pointStyle: 'string',
          pointRadius: 0,
          borderWidth: 4,
          fill: true
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            display: false,
            grace : .1,
          },
          x: {
            display: false,
          }
        }
      }
    });

    this.charts.push(chart);
  }

}
