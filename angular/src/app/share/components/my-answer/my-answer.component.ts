import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common'
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
  constructor(private cookies: CookiesService, private http: HttpClient) { }

  ngOnInit() {
  }
  handleClick() {

    let url = `http://101.37.119.148:3000/users/collectingAnswers/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token}` }) }
    this.http.delete(url, headerOption).subscribe((res) => { })
    setTimeout(() => { location.reload() }, 100)
  }
}
