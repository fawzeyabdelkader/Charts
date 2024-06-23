import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export class ChartsComponent {
  testChart = new Chart({
    series: [
      {
        type: 'pie',
        data: [
          { name: 'First', y: 1, color: '#eeefa5ff' },
          { name: 'Second', y: 1, color: '#393e64' },
          { name: 'Third', y: 1, color: '#00adb5' },
          { name: 'Four', y: 1, color: '#eef265' },
          { name: 'Five', y: 1, color: '#506ef9' },
          { name: 'Six', y: 3, color: '#506e' },
          { name: 'Seven', y: 1, color: '#888' },
          { name: 'Eight', y: 1, color: '#dddfffee' },
          { name: 'Nine', y: 1, color: '#888' },
          { name: 'Ten', y: 1, color: '#acc211' },
        ],
      },
    ],
  });

  lineChart = new Chart({
    chart: { type: 'line' },
    title: { text: 'Chart Diagram' },
    series: [
      {
        name: 'First Diagram Admitted',
        data: [1, 21, 3, 15, 5, 6, 27, 8, 20],
      },
      {
        name: 'Second Diagram Admitted',
        data: [15, 4, 17, 21, 28, 3, 12, 1],
      },
      {
        name: 'Third Diagram Admitted',
        data: [10, 9, 8, 7, 11, 5, 4, 32, 2, 28],
      } as any,
    ],
  });

  pieChart = new Chart({
    chart: { type: 'pie', plotShadow: false },
    credits: { enabled: false },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderRadius: 10,
        borderColor: '',
        borderWidth: 2,
        slicedOffset: 10,
        showInLegend: true,
        dataLabels: {
          connectorWidth: 1,
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Test',
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',

        data: [
          { name: 'First', y: 1, color: '#eeefa5ff' },
          { name: 'Second', y: 1, color: '#393e64' },
          { name: 'Third', y: 1, color: '#00adb5' },
          { name: 'Forth', y: 1, color: '#eef265' },
          { name: 'Five', y: 1, color: '#506ef9' },
          { name: 'Six', y: 3, color: '#506e' },
          { name: 'Seven', y: 1, color: '#888' },
          { name: 'Eight', y: 1, color: '#dddfffee' },
          { name: 'Nine', y: 1, color: '#888' },
          { name: 'Ten', y: 1, color: '#acc211' },
        ],
      },
    ],
  });


  areaChart = new Chart({
    chart: { type: 'area' },
    title: { text: 'Area Diagram' },
    series: [
      {
        name: 'First Diagram Admitted',
        data: [1, 21, 3, 15, 5, 6, 27, 8, 20],
      },
      {
        name: 'Second Diagram Admitted',
        data: [15, 4, 17, 21, 28, 3, 12, 1],
      },
      {
        name: 'Third Diagram Admitted',
        data: [10, 9, 8, 7, 11, 5, 4, 32, 2, 28],
      },
      {
        name: 'Four Diagram Admitted',
        data: [10, 19, 8, 7, 13, 5, 4, 23, 2, 28],
      }as any,
    ],
  });

}
