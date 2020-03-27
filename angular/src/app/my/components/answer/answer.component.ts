import { Component, OnInit, Input } from '@angular/core';
import { MyAnswer } from 'src/app/share';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  cards$: Observable<MyAnswer[]>
  constructor(private http: HttpClient, private cookies: CookieService) { }
  _id
  ngOnInit() {
    this._id = this.cookies.get("_id");
    this.cards$ = this.http.get<MyAnswer[]>(`http://101.37.119.148:3000/users/${this._id}/collectingAnswers`)
  }

}
