import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionCard } from 'src/app/answer';
import { HttpClient } from '@angular/common/http';
import { CookiesService } from 'src/app/share';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  cards$: Observable<QuestionCard>
  constructor(private cookies: CookiesService, private http: HttpClient) { }

  ngOnInit() {
    this.cards$ = this.http.get<QuestionCard>(`http://101.37.119.148:3000/users/${this.cookies._id}/questions`)
  }

}
