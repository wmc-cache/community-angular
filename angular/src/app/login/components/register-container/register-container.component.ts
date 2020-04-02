import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/dialog';
import { DialogPushComponent } from 'src/app/share';
@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.css']
})
export class RegisterContainerComponent implements OnInit {


  constructor(private dialogService: DialogService, private http: HttpClient, private router: Router) { }
  model = new User("", "");
  newHero() {
    this.model = new User("", "");

  }
  get user() { return JSON.stringify(this.model); }

  handleClick() {

    let url = 'http://101.37.119.148:3000/users'
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json' }) }
    this.http.post(url, this.user, headerOption).subscribe((res) => {
      console.log("POST请求：", res)
      if (res) {


      }


    })







  }
  ngOnInit() {
  }

}
