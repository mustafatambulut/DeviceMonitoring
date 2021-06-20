import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import _data from './../../@core/data/_data.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getAnalyticData(params['id']);
  });
  }
  deviceData:any = {};
  public dataList: {
    items: [];
    description: string;
    id: string;
    img: string;
    name: string;
  }[] = _data;

  getAnalyticData(id: string) {
     this.deviceData = this.dataList.find((t) => t.id == id);
  }

  ngOnInit() {document.body.style.background = "#dfe9ff";}
  
}
