import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";

export interface MyTopic {
  _id: string,
  avatar_url: string,
  name: string
}
@Component({
  selector: 'app-my-topic',
  templateUrl: './my-topic.component.html',
  styleUrls: ['./my-topic.component.css']
})
export class MyTopicComponent {
  @Input() card: MyTopic
  token
  constructor(private location: Location, private cookies: CookieService, private http: HttpClient) { }
  handleClick() {
    this.token = this.cookies.get("token");
    let url = `http://101.37.119.148:3000/users/followingTopics/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.token}` }) }
    this.http.delete(url, headerOption).subscribe(res => { console.log(res) })
    setTimeout(() => { location.reload() }, 500)

  }


}
