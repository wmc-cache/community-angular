import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyTopic, CookiesService } from 'src/app/share';
export interface MyCard {
  name: string,
  avatar_url: string,
  headline: string
}
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  constructor(private cookies: CookiesService, private http: HttpClient) { }
  cards$: Observable<MyTopic[]>
  _id: string
  change() {
    this.cards$ = this.http.get<MyTopic[]>(`http://101.37.119.148:3000/users/${this.cookies._id}/followingTopics`)
  }

  ngOnInit() {
    this.cards$ = this.http.get<MyTopic[]>(`http://101.37.119.148:3000/users/${this.cookies._id}/followingTopics`)
  }

}