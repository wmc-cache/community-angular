import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionCard } from 'src/app/answer';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  cards$: Observable<QuestionCard>
  _id: string
  constructor(private cookies: CookieService, private http: HttpClient) { }

  ngOnInit() {
    this._id = this.cookies.get("_id")
    this.cards$ = this.http.get<QuestionCard>(`http://101.37.119.148:3000/users/${this._id}/questions`)
  }

}
