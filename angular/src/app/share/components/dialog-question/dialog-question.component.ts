import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.css']
})
export class DialogQuestionComponent {
  constructor(private http: HttpClient) { }
  // data = {

  //   "name": "吴梦成",
  //   "password": "wmc"

  // }


  // handleClick() {


  //   let url = 'http://localhost:3000/users/login'
  //   let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json' }) }
  //   this.http.post(url, this.data, headerOption).subscribe((res) => {
  //     console.log("POST请求：", res)


  //   })
  // }


  data = {

    "title": "吴梦成",
    "description": "",
    "img": "http://localhost:3000/uploads/upload_1c3e8e5151d571978aa1ddea655aebbb.jpg",

  }
  content = '';

  handleClick() {
    this.data.description = this.content

    let url = 'http://localhost:3000/myQuestions'
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json' }) }
    this.http.post(url, this.data, headerOption).subscribe((res) => {
      console.log("POST请求：", res)
      this.content = ""

    })
  }



}
