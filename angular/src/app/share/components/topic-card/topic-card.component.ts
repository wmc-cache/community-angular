import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
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
export class TopicCardComponent implements OnInit, AfterContentInit {
  @Input() card: TopicCard
  constructor(private cookies: CookieService, private http: HttpClient, private router: Router) { }
  token
  arr
  _id
  idArr = []
  isCollect: boolean
  ngOnInit() {
    this._id = this.cookies.get("_id");
    this.http.get(`http://101.37.119.148:3000/users/${this._id}/followingTopics`).subscribe(res => {
      this.arr = res, this.arr.forEach(ele => {
        this.idArr.push(ele._id)

      }), this.idArr.includes(this.card._id) ? this.isCollect = false : this.isCollect = true
    })

  }
  ngAfterContentInit() {

  }

  link() {
    this.router.navigate(["/content"], { queryParams: { _id: `${this.card._id}` } })
  }

  handleClick() {
    this.isCollect = false
    this.token = this.cookies.get("token");
    let url = `http://101.37.119.148:3000/users/followingTopics/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.token}` }) }
    this.http.put(url, {}, headerOption).subscribe()
  }
}

