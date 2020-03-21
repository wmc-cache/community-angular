import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";
@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent {
  time: number = 2 * 60 * 60 * 1000;
  value1 = "吴梦成"
  value2 = "wmc"
  val
  constructor(private location: Location, private cookies: CookieService, private http: HttpClient, private router: Router) { }
  data = {

    "name": "",
    "password": ""

  }



  handleClick() {

    let name = this.data.name = this.value1
    this.data.password = this.value2


    let url = 'http://101.37.119.148:3000/users/login'
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json' }) }
    this.http.post(url, this.data, headerOption).subscribe((res) => {
      this.val = res
      let _id = this.val._id
      let token = this.val.token
      if (res) {
        this.cookies.set("_id", _id, new Date(new Date().getTime() + this.time));
        this.cookies.set("token", token, new Date(new Date().getTime() + this.time));
        this.router.navigate(['/home']);
        setTimeout(() => { location.reload() }, 1)



      }

    })


  }

  navigate() {
    this.router.navigate(['/register'])
  }

}
