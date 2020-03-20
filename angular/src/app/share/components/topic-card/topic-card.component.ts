import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
export interface TopicCard {
  name: string,
  avatar_url: string,
  introduction: string,
  _id: string
}
@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {
  @Input() card: TopicCard
  constructor(private cookies: CookieService, private http: HttpClient) { }
  token

  ngOnInit() {


  }

  handleClick() {
    this.token = this.cookies.get("token");
    console.log(this.token)
    let url = `http://101.37.119.148:3000/users/followingTopics/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.token}` }) }
    this.http.put(url, {}, headerOption).subscribe(res => { console.log(res) })
  }
}

