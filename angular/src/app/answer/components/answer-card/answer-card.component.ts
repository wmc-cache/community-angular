import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyCard } from 'src/app/my';
import { Router } from '@angular/router';
export interface QuestionCard {
  _id: string,
  questioner: string,
  title: string,
  description: string,
  createdAt: string
}
@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.css']
})
export class AnswerCardComponent implements OnInit {
  @Input() card
  constructor(private http: HttpClient, private router: Router) { }
  name$
  at: string
  handleClick() {
    this.router.navigate(["/answer/detail"], { queryParams: { _id: `${this.card._id}` } })
  }


  ngOnInit() {

    this.name$ = this.http.get<MyCard>(`http://101.37.119.148:3000/users/${this.card.questioner}`)
  }

}
