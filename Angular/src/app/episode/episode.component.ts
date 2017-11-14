import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../app.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  episode:any
  constructor(private seriesservice:SeriesService, public router: Router) { }

  getEpisode() {
    this.seriesservice.GetEpisode().subscribe(resdata => 
      { console.log(resdata, 'aaa');
      this.episode=resdata;
      }
    )}
  ngOnInit() {
  this.getEpisode();
  }

}
