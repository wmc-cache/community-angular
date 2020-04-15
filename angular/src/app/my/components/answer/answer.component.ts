import { Component, OnInit } from '@angular/core';
import { MyAnswer, CookiesService } from 'src/app/share';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  cards$: Observable<MyAnswer[]>
  constructor(private http: HttpClient, private cookies: CookiesService) { }

  ngOnInit() {

    this.cards$ = this.http.get<MyAnswer[]>(`http://101.37.119.148:3000/users/${this.cookies._id}/collectingAnswers`)
  }

}
