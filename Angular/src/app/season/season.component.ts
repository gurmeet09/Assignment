import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../app.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  seasons:any
  constructor(private seriesservice:SeriesService, public router: Router) { }

  getSeason() {
    this.seriesservice.GetSeason().subscribe(resdata => 
      { console.log(resdata, 'aaa');
      this.seasons=resdata;
      }
    )}
  ngOnInit() {
  this.getSeason();
  }
  Episode(name) {
    console.log('name',name);
    this.router.navigate(['/episode/'+ name]);
  }
}
