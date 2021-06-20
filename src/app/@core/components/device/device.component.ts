import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor() { }

  @Input() data: any = {};

  ngOnInit(): void {
    console.log('data', this.data);
  }

}
