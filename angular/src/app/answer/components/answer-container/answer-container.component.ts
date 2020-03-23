import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionCard } from '../answer-card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-answer-container',
  templateUrl: './answer-container.component.html',
  styleUrls: ['./answer-container.component.css']
})
export class AnswerContainerComponent implements OnInit {
  cards$: Observable<QuestionCard[]>
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cards$ = this.http.get<QuestionCard[]>(`http://101.37.119.148:3000/questions`)
  }

}
