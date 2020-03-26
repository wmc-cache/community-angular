import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnswerCard } from 'src/app/particulars';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {
  card$: Observable<AnswerCard>
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  _id
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => { this._id = params.get('_id') })
    this.card$ = this.http.get<AnswerCard>(`http://101.37.119.148:3000/questions/${this._id}`)
  }

}
