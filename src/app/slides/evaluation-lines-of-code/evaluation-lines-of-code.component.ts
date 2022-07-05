import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SlideComponent } from 'src/app/components/slide/slide.component';
import { AbstractSlide } from 'src/app/models/abstract-slide';

@Component({
  selector: 'app-evaluation-lines-of-code',
  templateUrl: './evaluation-lines-of-code.component.html',
  styleUrls: ['./evaluation-lines-of-code.component.scss']
})
export class EvaluationLinesOfCodeComponent extends AbstractSlide implements OnInit {
  max: number = 7;
  @ViewChild(SlideComponent) slide: SlideComponent;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Line Follower (controller)', 'Line Follower (supervised)', 'Maze Solver', 'Object Finder', 'Obstacle Navigation', 'Person Follower', 'Push Ball into Goal', 'Simple Navigation' ],
    datasets: [],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    indexAxis: 'y',

    font: {
      family: '"Fira Sans", sans-serif',
    },
    hover: {mode: null},
    plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
            labels: {
                font: {
                  family: '"Fira Sans", sans-serif',
                }
            }
        }
    },
    scales: {
      x: {
          min: 0,
          max: 1600,
          grid: {
              display: false
          },
          ticks: {
              font: {
                family: '"Fira Sans", sans-serif',
                size: 14,
              },
          },
      },
      y: {
        grid: {
            display: false
        },
        ticks: {
            font: {
              family: '"Fira Sans", sans-serif',
              size: 14,
            },
          },
      }
  }
  };

  constructor() { super() }

  ngOnInit(): void {
  }

  next(): void {
    super.next();

    if (this.step >= 1 && this.barChartData.datasets.length === 0) {
      this.barChartData.datasets = [
        { data: [ 23, 36, 74, 90, 59, 60, 87, 59 ], label: 'DSL', backgroundColor: '#e74c3c', borderRadius: 5 },
        { data: [ 102, 87, 190, 239, 127, 130, 303, 127 ], label: 'CIF', backgroundColor: '#3498db', borderRadius: 5 },
        { data: [ 1245, 0, 1292, 1371, 1161, 1160, 1414, 1161 ], label: 'ROS1', backgroundColor: '#f1c40f', borderRadius: 5 },
        { data: [ 1243, 1222, 1287, 1367, 1157, 1156, 1409, 1157 ], label: 'ROS2', backgroundColor: '#2ecc71', borderRadius: 5 },
      ];
      this.chart.update();
    }
  }

  prev(): void {
    super.prev();

    if (this.step < 1) {
      this.barChartData.datasets = [];
      this.chart.update();
    }
  }
}
