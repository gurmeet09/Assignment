import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { SeriesService } from '../app.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
obj1:any
obj2:any
  constructor(public fb: FormBuilder, public router: Router, public seriesservice: SeriesService,public auth: AuthService) { }

  ngOnInit() {
  }
  onlogin(form1) {
    console.log('hsahdf',form1)
    console.log('hsahdf',form1.username)
    let userName = form1.username;
    this.auth.LoginUser(form1)
      .subscribe(res => {
        console.log("res",res)
        this.obj1 = res.respData.data;
        this.obj2 = this.obj1.user_type;
        localStorage.setItem('username', res.respData.data.username);
        localStorage.setItem('usertype', res.respData.data.user_type);
        if (this.obj2 == "1") {
          this.router.navigate(['/admin/'+ userName]);
  
        }
        else if (this.obj2 == "2") {
          this.router.navigate(['/user/'+ userName])
  
        }
        else {
          alert("User not verifed");
        }
      },
  errorr => {
          alert("Error");
        });
  }
  }
