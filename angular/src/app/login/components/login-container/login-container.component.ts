import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent {
  value1 = "吴梦成"
  value2 = "wmc"
  constructor(private http: HttpClient, private router: Router) { }

  data = {

    "name": "",
    "password": ""

  }


  handleClick() {
    this.data.name = this.value1
    this.data.password = this.value2
    console.log(this.data)

    let url = 'http://101.37.119.148:3000/users/login'
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json' }) }
    this.http.post(url, this.data, headerOption).subscribe((res) => {
      console.log("POST请求：", res)
      if (res) {
        this.router.navigate(['/home']);
      }

    })

  }

}
