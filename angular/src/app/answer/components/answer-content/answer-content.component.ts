import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyCard } from 'src/app/my';
import { Observable } from 'rxjs';
import { CookiesService } from 'src/app/share';
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
export class AnswerContentComponent implements OnInit {
  @Input() card: ContentCard
  @Input() name$: Observable<MyCard>
  arr: any
  idArr = []
  isCollect: boolean
  constructor(private http: HttpClient, private cookies: CookiesService) { }
  like() {
    let url = `http://101.37.119.148:3000/users/likingAnswers/${this.card._id}`
    let headerOption = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token} `
      })
    }
    this.http.put(url, {}, headerOption).subscribe((res) => { console.log(res) })
    setTimeout(() => { location.reload() }, 500)
  }

  dislike() {
    let url = `http://101.37.119.148:3000/users/dislikingAnswers/${this.card._id}`
    let headerOption = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token} `
      })
    }
    this.http.put(url, {}, headerOption).subscribe((res) => { console.log(res) })
    setTimeout(() => { location.reload() }, 500)
  }

  collect() {
    let url = `http://101.37.119.148:3000/users/collectingAnswers/${this.card._id}`
    let headerOption = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token} `
      })
    }
    this.http.put(url, {}, headerOption).subscribe((res) => { })
    setTimeout(() => { location.reload() }, 500)
  }

  ngOnInit() {
    this.http.get(`http://101.37.119.148:3000/users/${this.cookies._id}/collectingAnswers`).subscribe(res => {
      this.arr = res, this.arr.forEach(ele => {
        this.idArr.push(ele._id)

      }), this.idArr.includes(this.card._id) ? this.isCollect = false : this.isCollect = true
    })
    this.name$ = this.http.get<MyCard>(`http://101.37.119.148:3000/users/${this.card.answerer}`)
  }

}
