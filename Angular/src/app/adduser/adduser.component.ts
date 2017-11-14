import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SeriesService } from '../app.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  constructor(private _fb: FormBuilder,public seriesservice: SeriesService) { 
    this.myForm = this._fb.group({
      firstname: ['', [<any>Validators.required, Validators.minLength(5)]],
      lastname: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      email: ['', [<any>Validators.required, <any>Validators.minLength(5), Validators.pattern(this.emailRegexp)]],
      username: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],

    });
  }
  emailRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ngOnInit() {
  }

  save() {
    
        console.log(this.myForm.value)
        this.seriesservice.PostUsers(this.myForm.value)
          .subscribe(res => {
            if (res.status == true)
             
            alert("registered successfully")
          });
    
      }
    }
  
