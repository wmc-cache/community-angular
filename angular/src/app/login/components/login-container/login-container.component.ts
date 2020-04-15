import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";
import { User } from '../user'
@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {
  time: number = 2 * 60 * 60 * 1000;
  val: any
  constructor(private location: Location, private cookies: CookieService, private http: HttpClient, private router: Router) { }


  model = new User("", "");



  newHero() {
    this.model = new User("", "");

  }
  get user() { return JSON.stringify(this.model); }

  handleClick() {
    let url = 'http://101.37.119.148:3000/users/login'
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json' }) }
    this.http.post(url, this.user, headerOption).subscribe((res) => {
      this.val = res
      let _id = this.val._id
      let token = this.val.token
      if (res) {
        this.cookies.set("_id", _id, new Date(new Date().getTime() + this.time), "./");
        this.cookies.set("token", token, new Date(new Date().getTime() + this.time), "./");
        this.router.navigate(['/discover']);
        setTimeout(() => { location.reload() }, 100)
      }

    })


  }

  navigate() {
    this.router.navigate(['/register'])
  }



  ngOnInit() {
  }
}
