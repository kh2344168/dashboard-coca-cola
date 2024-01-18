import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('myChartline') as HTMLCanvasElement;

    const labels = [
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
      '24 Jan',
    ];
    Chart.defaults.font.size = 9;
    Chart.defaults.color = '#ddd';

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: [
              250, 260, 255, 230, 200, 170, 150, 180, 220, 250, 240, 220, 200,210, 230, 260,
            ], // Update the data values as needed
            backgroundColor: ['#FF7F5C'],

            tension: 0.3,
            pointRadius: 2,
            borderColor: '#08415C',
            pointBorderColor: '#08415C',
            pointBackgroundColor: '#08415C',
          },
        ],
      },
      options: {
        layout: {
          padding: {
            top : 40,
            left: 20,
            bottom: 20 ,
          },
        },
        plugins: {
          legend: {
            display: false, // Set to false to hide the legend and prevent the button
          },
        },
        maintainAspectRatio: false,
        scales: {

          y: {
            beginAtZero: true,
            min: 100,
            max: 300,
            display: true,

            grid: {
              display: true, // Set to true to show grid lines
              color: '#dddddd',
            },
            border: {
              dash: [2, 4],
              display: false,
            },
            ticks: {
              stepSize: 50,
            },
          },
          x: {
            display: true,

            grid: {
              display: false,
            },
            border: {
              dash: [2, 4],
              color: 'black',
            },
          },
        },
      },
    });
  }
}
