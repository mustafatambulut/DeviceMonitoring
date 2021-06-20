import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/services/auth.service';
import devices from './../../@core/data/_devices.json';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  isLogin: any;
  public dataList: {
    description: string;
    id: string;
    img: string;
    name: string;
  }[] = devices;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.isLoginFunc();
    document.body.style.background = "#fff";
  }

  logout(){
    this.authService.logout();
    this.isLoginFunc();
    // window.location.reload();
  }

  isLoginFunc(){
    this.isLogin = this.authService.isLoggedIn("landing");
  }
  
}
