import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../app.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-adminmovies',
  templateUrl: './adminmovies.component.html',
  styleUrls: ['./adminmovies.component.css']
})
export class AdminmoviesComponent implements OnInit {
  public form3: FormGroup;
  public submitted: boolean;
  NewSeries:{
    series_id:String,
    series_name:String,
    series_data:String,
    series_image:String

}={
    series_id:'',
    series_name:'',
    series_data:'',
    series_image:''
};
NewSeries1:{
  series_id:String,
  season_id:String,
  season_name:String,
  season_data:String,
  season_image:String,

}={
  series_id:'',
  season_id:'',
  season_name:'',
  season_data:'',
  season_image:'',
 
};
NewSeries2:{
  series_id:String,
  season_id:String,
  episode_id:String,
  episode_name:String,
  episode_data:String,
  episode_image:String,

}={
  series_id:'',
  season_id:'',
  episode_id:'',
  episode_name:'',
  episode_data:'',
  episode_image:'',
 
}
base64: any;
flag: boolean;
flag1 = 0;
flag2=0;
flag3=0;
series=[ ];
  constructor(public router: Router,public seriesservice: SeriesService,private _fb: FormBuilder) {
    this.form3 = this._fb.group({
      episode_name: ['', [<any>Validators.required, Validators.minLength(5)]],
      // lastname: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      // email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      // username: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      // password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],

    });
  }
   

  ngOnInit() {
  }
  addseries() {
    this.NewSeries.series_image = this.base64;
    console.log(this.NewSeries)
    this.seriesservice.PostSeries(this.NewSeries)
      .subscribe(resdata => {
      console.log(resdata)
      // if(resdata.status==true)
      // alert("Series added successfuly");
      })
}
addseasons() {
  this.NewSeries1.season_image = this.base64;
  console.log(this.NewSeries1)
  this.seriesservice.PostSeason(this.NewSeries1)
    .subscribe(resdata => {
    console.log(resdata)
    // if(resdata.status==true)
    // alert("Series added successfuly");
    })
}
addepisodes() {
  this.NewSeries2.episode_image = this.base64;
  console.log(this.NewSeries2,"gharu")
  this.seriesservice.PostEpisode(this.NewSeries2)
    .subscribe(resdata => {
    console.log(resdata)
    if(resdata){
    alert("Series added successfuly");
    // this.router.navigate(["/showuser"])
    }
      else {
        alert("All the Fields are mendatory")
}
    })
  }
flagSeries() {
  //this.flag1= 1;
  this.flag1=1;
}
flagShows() {
  this.flag2= 1;
}
flagEpisodes() {
  this.flag3= 1;
}
  changeListener(event) {
    console.log(event.target)
    this.encodeImageFileAsURL(event.target)
    }
    encodeImageFileAsURL(element) {
    var file=element.files[ 0 ];
    var reader=new FileReader( );
    reader.onloadend=(data => {
    this.base64=reader.result;
    this.NewSeries.series_image=this.base64;
    //console.log('RESULT', reader.result)
    })
    reader.readAsDataURL(file);
    //console.log(this.base64);
    }

    btnClick(){
      this.router.navigateByUrl('/user');
    }
    search(){
      this.router.navigate(['\search'])
    }

}
