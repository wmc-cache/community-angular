import { Component, OnInit } from '@angular/core';
import { MyQuestionCard } from 'src/app/share';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export interface MyCard {
  name: string,
  avatar_url: string,
  headline: string
}
@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent implements OnInit {



  constructor(private cookies: CookieService, private http: HttpClient) { }
  cards$: Observable<MyCard[]>
  _id



  ngOnInit() {
    this._id = this.cookies.get("_id");
    this.cards$ = this.http.get<MyCard[]>(`http://101.37.119.148:3000/users/${this._id}/followingTopics`)
  }

}
