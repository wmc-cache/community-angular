import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyCard } from 'src/app/my';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";
import { MyAnswer } from 'src/app/share';

export interface ContentCard {
  _id: string
  content: string,
  answerer: string,
  voteCount: number
}
@Component({
  selector: 'app-answer-content',
  templateUrl: './answer-content.component.html',
  styleUrls: ['./answer-content.component.css']
})
export class AnswerContentComponent implements OnInit, AfterContentInit {
  @Input() card: ContentCard
  @Input() name$: Observable<MyCard>
  constructor(private location: Location, private http: HttpClient, private cookies: CookieService) { }
  _id
  token
  arr = []
  list$
  collecting = []

  like() {
    this.token = this.cookies.get("token");
    let url = `http://101.37.119.148:3000/users/likingAnswers/${this.card._id}`
    let headerOption = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json', "Authorization": `bearer ${this.token} `
      })
    }
    this.http.put(url, {}, headerOption).subscribe((res) => { console.log(res) })
    setTimeout(() => { location.reload() }, 1000)
  }
  dislike() {
    this.token = this.cookies.get("token");
    let url = `http://101.37.119.148:3000/users/dislikingAnswers/${this.card._id}`
    let headerOption = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json', "Authorization": `bearer ${this.token} `
      })
    }
    this.http.put(url, {}, headerOption).subscribe((res) => { console.log(res) })
    setTimeout(() => { location.reload() }, 1000)
  }

  collect() {


    console.log(this.collecting)



    this.token = this.cookies.get("token");
    let url = `http://101.37.119.148:3000/users/collectingAnswers/${this.card._id}`
    let headerOption = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json', "Authorization": `bearer ${this.token} `
      })
    }
    this.http.put(url, {}, headerOption).subscribe((res) => { })
    setTimeout(() => { location.reload() }, 1000)
  }

  ngOnInit() {


    this._id = this.cookies.get("_id");
    this.list$ = this.http.get<MyAnswer[]>(`http://101.37.119.148:3000/users/${this._id}/collectingAnswers`)
      .pipe(map(all => all.filter(ele => ele._id === this.card._id)))

    this.list$.forEach(element => {
      this.arr.push(element)
    });



    this.name$ = this.http.get<MyCard>(`http://101.37.119.148:3000/users/${this.card.answerer}`)
  }
  ngAfterContentInit(): void {

    console.log(this.arr)
  }
}
