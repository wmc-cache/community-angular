import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";
import { QuestionCard } from 'src/app/answer';

@Component({
  selector: 'app-my-question',
  templateUrl: './my-question.component.html',
  styleUrls: ['./my-question.component.css']
})
export class MyQuestionComponent implements OnInit {
  @Input() card: QuestionCard
  token
  constructor(private location: Location, private cookies: CookieService, private http: HttpClient) { }

  ngOnInit() {
  }
  handleClick() {
    this.token = this.cookies.get("token");
    console.log(this.card._id)
    let url = `http://101.37.119.148:3000/questions/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.token}` }) }
    this.http.delete(url, headerOption).subscribe(res => { console.log(res) })
    setTimeout(() => { location.reload() }, 500)
  }

}
