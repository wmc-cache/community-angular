import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MyTopic } from 'src/app/share';
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
  constructor(private cookies: CookieService, private http: HttpClient) { }
  cards$: Observable<MyTopic[]>
  _id



  ngOnInit() {
    this._id = this.cookies.get("_id");
    this.cards$ = this.http.get<MyTopic[]>(`http://101.37.119.148:3000/users/${this._id}/followingTopics`)
  }

}