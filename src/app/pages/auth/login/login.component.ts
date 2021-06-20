import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/@core/services/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router, private toastrService: ToastrService) {}
  userName:any;
  password:any;
  ngOnInit() {
    document.body.style.background = "#dfe9ff";
  }
  
  login(form: NgForm){
    if(typeof this.userName == "undefined" || typeof this.password == "undefined"){
      this.toastrService.warning("Enter your username or password.");
    }else if(form.valid && this.userName.toLowerCase() == "admin" && this.password.toLowerCase() == "admin" ){
      this.authService.login();
      this.router.navigate(['landing'])
    }else{
      this.toastrService.error("Username or password is incorrect.");
    }
    
  }

}
