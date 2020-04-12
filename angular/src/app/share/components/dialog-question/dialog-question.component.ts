import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookiesService } from '../..';



@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.css']
})
export class DialogQuestionComponent {
  constructor(private cookies: CookiesService, private http: HttpClient) { }
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
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token}` }) }
    this.http.post(url, this.data, headerOption).subscribe((res) => {
      console.log("POST请求：", res)
      this.value = ""
      this.content = ""
      setTimeout(() => { location.reload() }, 100)
    })
  }



}
