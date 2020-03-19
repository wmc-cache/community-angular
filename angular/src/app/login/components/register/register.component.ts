import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  value1 = ""
  value2 = ""
  value3 = ""
  message = ""
  constructor(private http: HttpClient, private router: Router) { }

  data = {

    "name": "",
    "password": ""

  }


  handleClick() {



    if (this.value2 === this.value3) {
      this.data.name = this.value1
      this.data.password = this.value2


      console.log(this.data)

      let url = 'http://101.37.119.148:3000/users'
      let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json' }) }
      this.http.post(url, this.data, headerOption).subscribe((res) => {
        console.log("POST请求：", res)
        if (res) {
          this.message = "注册成功"
        }


      })


    } else {
      this.message = "两次输入密码不一致"
    }




  }
}
