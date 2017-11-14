import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SeriesService } from './app.service';


@Injectable()
export class AuthService implements CanActivate {
  usertype;
  constructor(public router1: Router, public auth: SeriesService, public httpService: Http) { }
  private urlloginusers: string = "http://192.168.15.214:8888/api/v1/userlogin";
  
  canActivate(route: ActivatedRouteSnapshot) {
    var x = route.data;
    if (x[0].usertype == localStorage.getItem("user_type")) {
      return true;
    }
    else {
      this.router1.navigate(['/login'])
      return false;

    }
  }
  details: {
    username: string,
    password: string
  }
  public data;
  public check;
  static value;


  LoginUser(Data): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.urlloginusers,Data, options).map(
      (res: Response) => res.json());
  }

}