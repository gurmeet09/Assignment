import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../app.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
series:any
  constructor(private seriesservice:SeriesService, public router: Router) { }

  ngOnInit() {
    this.getSeries()
  }
  getSeries(){
  this.seriesservice.GetItems().subscribe(resdata => 
    { console.log(resdata, 'aaa');
    this.series=resdata;
  });
}
  seasons(name) {
    console.log('name',name);
    this.router.navigate(['/season/'+ name]);
    }
}
  