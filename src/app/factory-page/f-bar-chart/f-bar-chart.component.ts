import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-f-bar-chart',
  templateUrl: './f-bar-chart.component.html',
  styleUrls: ['./f-bar-chart.component.scss']
})
export class FBarChartComponent {

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

    ];
    Chart.defaults.font.size = 9;
    Chart.defaults.color = '#ddd';

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: [
              150, 0, 0, 230, 200, 170, 200, 180,
            ], // Update the data values as needed
            backgroundColor: [
              '#F40009',
            ],
            borderColor: [
              '#2EC4B6',
            ],
            borderRadius : 6 ,
            barPercentage : .5,
          },
          {
            label: 'My second Dataset',
            data: [
              -250, -150, -200, -0, -0, -100, -0, -0,
            ], // Update the data values as needed
            backgroundColor: [
              '#2EC4B6',
            ],
            borderColor: [
              "#2EC4B6",
            ],
            borderRadius : 6 ,
            barPercentage : .5,

          },
        ],

      },
      options: {
        layout: {
          padding: {
            top: 40,
            left: 20,
            bottom: 20,
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
            // beginAtZero: true,
            // min: 100,
            // max: 300,
            display: false,
            stacked : true ,

            grid: {
              display: true, // Set to true to show grid lines
              color: '#dddddd',
            },
            border: {
              dash: [2, 4],
              display: false,
            },
            // ticks: {
            //   stepSize: 50,
            // },
          },
          x: {
            // position : "top",
            stacked : true ,
            display: false,

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
