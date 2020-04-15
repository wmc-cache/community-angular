import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookiesService } from '../..';
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
  arr
  idArr
  isCollect
  constructor(private cookies: CookiesService, private http: HttpClient) { }
  ngOnInit() {
    this.http.get(`http://101.37.119.148:3000/users/${this.cookies._id}/followingTopics`).
      subscribe(res => {
        this.arr = res, this.arr.forEach(ele => {
          this.idArr.push(ele._id)

        }), this.idArr.includes(this.card._id) ? this.isCollect = false : this.isCollect = true
      })
  }

  handleClick() {
    this.isCollect = true
    let url = `http://101.37.119.148:3000/users/followingTopics/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token}` }) }
    this.http.delete(url, headerOption).subscribe(res => { console.log(res) })
  }


}
