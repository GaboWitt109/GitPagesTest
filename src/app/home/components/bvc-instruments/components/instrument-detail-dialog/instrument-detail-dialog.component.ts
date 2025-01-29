import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { DecimalPipe, NgClass, PercentPipe } from '@angular/common';
import * as Highcharts from 'highcharts/highstock';
import moment from 'moment';
import { DialogInstrumentDetail } from '../../../../../models/bvc.interface';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-instrument-detail-dialog',
  standalone: true,
  imports: [DecimalPipe, PercentPipe, NgClass, MatDialogClose, MatIcon],
  templateUrl: './instrument-detail-dialog.component.html',
  styleUrl: './instrument-detail-dialog.component.css',
})
export class InstrumentDetailDialogComponent implements OnInit {
  data: DialogInstrumentDetail = inject(MAT_DIALOG_DATA);
  colorMapping: Record<ColorClass, ColorDetails> = {
    'text-red-500': {
      gradientColorStart: 'rgba(239, 68, 68, 0.1)',
      gradientColorEnd: 'rgba(239, 68, 68, 1)',
      color: '#EF4444',
    },
    'text-green-500': {
      gradientColorStart: 'rgba(2, 152, 55, 0.1)',
      gradientColorEnd: 'rgba(2, 152, 55, 1)',
      color: '#029837',
    },
  };

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    setTimeout(() => {
      const colorDetails = this.colorMapping[this.data.color as ColorClass];
      const seriesArray: [number, number][] = this.data.historic
        ? this.data.historic.map((d: { FEC: string; PRECIO_CIE: string }) => {
            return [
              Number(moment(d.FEC, 'DD/MM/YYYY').format('x')),
              Number(d.PRECIO_CIE),
            ];
          })
        : [];

      const chartOptions: Highcharts.Options = {
        title: {
          text: this.data.descSimb,
        },
        xAxis: {
          type: 'datetime',
          minRange: 86400 * 1000, // 1 Day
          dateTimeLabelFormats: {
            day: '%b %e, %Y',
          },
        },
        rangeSelector: {
          selected: 1,
          buttons: [
            { type: 'day', count: 1, text: '1D' },
            { type: 'month', count: 3, text: '3M' },
            { type: 'year', count: 1, text: '1Y' },
            { type: 'all', text: 'All' },
          ],
        },
        tooltip: {
          followTouchMove: true,
          dateTimeLabelFormats: {
            day: '%b %e, %Y',
          },
          xDateFormat: '%b %e, %Y',
        },
        series: [
          {
            type: 'area',
            name: this.data.codSimb,
            data: seriesArray,
            tooltip: { valueDecimals: 2 },
            threshold: null,
            color: colorDetails.color,
            fillColor: {
              linearGradient: {
                x1: 0,
                x2: 0,
                y1: 1,
                y2: 0,
              },
              stops: [
                [0, colorDetails.gradientColorStart],
                [1, colorDetails.gradientColorEnd],
              ],
            },
          },
        ] as Highcharts.SeriesOptionsType[],
      };

      new Highcharts.StockChart('container', chartOptions);
    }, 100);
  }
}

interface ColorDetails {
  gradientColorStart: string;
  gradientColorEnd: string;
  color: string;
}

type ColorClass = 'text-red-500' | 'text-green-500';
