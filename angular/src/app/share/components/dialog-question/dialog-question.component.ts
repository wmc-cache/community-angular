import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.css']
})
export class DialogQuestionComponent {
  constructor(private cookies: CookieService, private http: HttpClient) { }
  value = '';
  content = '';
  token
  data = {

    "title": "",
    "description": "",



  }


  handleClick() {
    this.data.title = this.value
    this.data.description = this.content
    let url = 'http://101.37.119.148:3000/questions'
    this.token = this.cookies.get("token");
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.token}` }) }
    this.http.post(url, this.data, headerOption).subscribe((res) => {
      console.log("POST请求：", res)
      this.value = ""
      this.content = ""

    })
  }



}
