import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicCard } from 'src/app/share';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  card$: Observable<TopicCard>
  _id
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => { this._id = params.get('_id') })

    this.card$ = this.http.get<TopicCard>(`http://101.37.119.148:3000/topics/${this._id}`)
  }

}
