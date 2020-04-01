import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common'
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
  constructor(private location: Location, private cookies: CookieService, private http: HttpClient) { }
  token
  ngOnInit() {
  }
  handleClick() {
    console.log(this.card)
    let url = `http://101.37.119.148:3000/users/collectingAnswers/${this.card._id}`
    this.token = this.cookies.get("token");
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.token}` }) }
    this.http.delete(url, headerOption).subscribe((res) => { })
    setTimeout(() => { location.reload() }, 100)
  }
}
