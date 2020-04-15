import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookiesService } from '../..';
export interface MyAnswer {
  _id: string
  content: string
}
@Component({
  selector: 'app-my-answer',
  templateUrl: './my-answer.component.html',
  styleUrls: ['./my-answer.component.css']
})
export class MyAnswerComponent implements OnInit {
  @Input() card
  arr
  idArr = []
  isCollect: boolean
  constructor(private cookies: CookiesService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://101.37.119.148:3000/users/${this.cookies._id}/collectingAnswers`).subscribe(res => {
      this.arr = res, this.arr.forEach(ele => {
        this.idArr.push(ele._id)

      }), this.idArr.includes(this.card._id) ? this.isCollect = false : this.isCollect = true
    })

  }
  handleClick() {
    this.isCollect = true
    let url = `http://101.37.119.148:3000/users/collectingAnswers/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token}` }) }
    this.http.delete(url, headerOption).subscribe((res) => { })

  }
}
