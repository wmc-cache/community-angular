import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookiesService } from '../..';

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
  constructor(private cookies: CookiesService, private http: HttpClient, private router: Router) { }
  arr
  idArr = []
  isCollect: boolean
  ngOnInit() {
    this.http.get(`http://101.37.119.148:3000/users/${this.cookies._id}/followingTopics`).subscribe(res => {
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
    let url = `http://101.37.119.148:3000/users/followingTopics/${this.card._id}`
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token}` }) }
    this.http.put(url, {}, headerOption).subscribe()
  }
}

