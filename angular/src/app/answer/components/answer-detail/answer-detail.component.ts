import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ContentCard } from '..';
import { AnswerCard } from 'src/app/share';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {
  card$: Observable<AnswerCard>
  cards$: Observable<ContentCard[]>
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  _id: string
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => { this._id = params.get('_id') })
    this.cards$ = this.http.get<ContentCard[]>(`http://101.37.119.148:3000/questions/${this._id}/answers`)
    this.card$ = this.http.get<AnswerCard>(`http://101.37.119.148:3000/questions/${this._id}`)
  }

}
