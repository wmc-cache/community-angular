import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicCard } from 'src/app/share';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { QuestionCard } from 'src/app/answer';


@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  card$: Observable<TopicCard>
  _id: string
  cards$: Observable<QuestionCard[]>
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => { this._id = params.get('_id') })
    this.card$ = this.http.get<TopicCard>(`http://101.37.119.148:3000/topics/${this._id}`)
    this.cards$ = this.http.get<QuestionCard[]>(`http://101.37.119.148:3000/topics/${this._id}/questions`)
  }

}
