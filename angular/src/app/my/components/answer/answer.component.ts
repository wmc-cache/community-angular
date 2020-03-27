import { Component, OnInit, Input } from '@angular/core';
import { MyAnswer } from 'src/app/share';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  cards$: Observable<MyAnswer[]>
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cards$ = this.http.get<MyAnswer[]>(``)
  }

}
