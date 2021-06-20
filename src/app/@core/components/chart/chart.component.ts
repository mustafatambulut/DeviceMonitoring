import { Component, Input, OnInit } from '@angular/core';
import _data from './../../@core/data/_data.json';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { Chart.register(...registerables); }
  @Input() data: any = {};
  dataArray:any = [];
  ngOnInit(): void {}

  ngAfterViewInit(){

    let data:any,
        options:any,
        chart:any,
        ctx:any = document.getElementById('myAreaChart') as HTMLElement;

        for(let key in this.data.items){
          if(this.data.items.hasOwnProperty(key)){
            this.dataArray.push(this.data.items[key])
          }
        }
        data = {
          labels: ["Device 1", "Device 2", "Avarage"],
          datasets: this.dataArray
        }

        options = {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            position: "top",
            text:"Devices Compare Data",
            fontSize:12,
            fontColor: "#666"
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "#999",
              fontSize: 14
            }
          }
        }

        chart  = new Chart(ctx, {
          type: "line",
          data: data,
          options: options
        })



  }

}
