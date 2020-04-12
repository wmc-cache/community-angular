import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Location } from "@angular/common";
import { QuestionCard } from 'src/app/answer';
import { CookiesService } from '../..';

@Component({
  selector: 'app-my-question',
  templateUrl: './my-question.component.html',
  styleUrls: ['./my-question.component.css']
})
export class MyQuestionComponent implements OnInit {
  @Input() card: QuestionCard
  constructor(private location: Location, private cookies: CookiesService, private http: HttpClient) { }

  ngOnInit() {
  }
  handleClick() {
    let url = `http://101.37.119.148:3000/questions/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token}` }) }
    this.http.delete(url, headerOption).subscribe(res => { console.log(res) })
    setTimeout(() => { location.reload() }, 500)
  }

}
