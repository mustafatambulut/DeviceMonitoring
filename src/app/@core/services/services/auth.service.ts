import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(url? : any): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      url != "landing" ? this.router.navigate(['/auth']):null;
      return false;
    }
  }

  login() {
    localStorage.setItem('token',"true")
  }

  logout(){
    localStorage.removeItem('token');
  }

}
