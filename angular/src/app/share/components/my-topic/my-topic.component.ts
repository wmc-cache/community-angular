import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
export class MyTopicComponent implements OnInit {
  @Input() card: MyTopic
  @Output() change = new EventEmitter()
  token: string
  _id: string
  arr
  idArr
  isCollect
  constructor(private location: Location, private cookies: CookieService, private http: HttpClient) { }
  ngOnInit() {
    this._id = this.cookies.get("_id");
    this.http.get(`http://101.37.119.148:3000/users/${this._id}/followingTopics`).
      subscribe(res => {
        this.arr = res, this.arr.forEach(ele => {
          this.idArr.push(ele._id)

        }), this.idArr.includes(this.card._id) ? this.isCollect = false : this.isCollect = true
      })
  }

  handleClick() {
    this.isCollect = true
    this.token = this.cookies.get("token");
    let url = `http://101.37.119.148:3000/users/followingTopics/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.token}` }) }
    this.http.delete(url, headerOption).subscribe(res => { console.log(res) })

  }


}
