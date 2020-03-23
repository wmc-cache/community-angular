import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyCard } from 'src/app/my';
export interface QuestionCard {
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
  constructor(private http: HttpClient) { }
  name$
  at: string

  ngOnInit() {

    this.name$ = this.http.get<MyCard>(`http://101.37.119.148:3000/users/${this.card.questioner}`)
  }

}