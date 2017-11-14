import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../app.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
series:any
  constructor(private seriesservice:SeriesService, public router: Router) { }

  ngOnInit() { 
  }
  search(){
    // this.seriesservice.SearchSeries(this.search).subscribe(resdata => 
    //   { console.log (resdata, 'aaa');
    //   this.search=resdata;
      this.router.navigate(['/search/']);
    //   }
    // )}

}
}
