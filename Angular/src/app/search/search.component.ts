import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../app.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
GetSearchSeries:any;
searchitem1
  constructor(private seriesservice:SeriesService) { }

  ngOnInit() {
  }
  SearchSeries() {
    this.seriesservice.SearchSeries(this.searchitem1).subscribe(res => {
      this.GetSearchSeries = res.respData.data[0];
      if (this.GetSearchSeries) {
      }
      else {
        alert('Cannot find Anything');
      }
    })
  }

}
