import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminmoviesComponent } from './adminmovies/adminmovies.component';

@Injectable()
export class SeriesService implements OnInit {

    constructor(private _http: Http) { }
    private urlseries: string = "http://192.168.15.214:8888/api/v1/series";
    private url = 'http://192.168.15.214:8888/api/v1/user';
    private urlloginusers: string = "http://192.168.15.214:8888/api/v1/userlogin";
    private urlgetseries: string = "http://192.168.15.214:8888/api/v1/getSeries";
    private urlseason: string = "http://192.168.15.214:8888/api/v1/seasons";
    private urlepisode: string = "http://192.168.15.214:8888/api/v1/episodes";
    private urlsearchseries: string = "http://192.168.15.214:8888/api/v1/search";
    
    PostSeries(Data) {
        // let headers=new Headers({ 'Content-Type': 'application/json' });
        // let options=new RequestOptions({ headers: headers });
        console.log(Data);
        return this._http.post(this.urlseries, Data).map(
            (res: Response) => res.json());
    }
    PostUsers(Data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        console.log(Data);
        return this._http.post(this.url, Data, options).map(
            (res: Response) => res.json());
    }
    LoginUser(Data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        console.log(Data);
        return this._http.post(this.urlloginusers, Data, options).map(
            (res: Response) => res.json());
    }
    GetItems() {
        return this._http.get(this.urlgetseries).map((res) => res.json());
      }
      PostSeason(Data) {
        console.log(Data);
        return this._http.post(this.urlseason, Data).map(
            (res: Response) => res.json());
    }
    PostEpisode(Data) {
        console.log(Data);
        return this._http.post(this.urlepisode, Data).map(
            (res: Response) => res.json());
    }
    GetEpisode() {
        return this._http.get(this.urlepisode).map((res) => res.json());
    }
    GetSeason() {
        return this._http.get(this.urlseason).map((res) => res.json());
      }
    SearchSeries(Data){
       
        return this._http.post(this.urlsearchseries,Data).map(
            (res: Response) => res.json());
    }
    ngOnInit() {

    }
}