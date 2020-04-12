import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CookiesService } from '../..';

@Component({
  selector: 'app-dialog-answer',
  templateUrl: './dialog-answer.component.html',
  styleUrls: ['./dialog-answer.component.css']
})
export class DialogAnswerComponent implements OnInit {
  date = { content: "" }
  _id: string
  content = ""

  constructor(private route: ActivatedRoute, private http: HttpClient, private cookies: CookiesService) { }
  submit() {
    this.route.queryParamMap.subscribe(params => { this._id = params.get('_id') })
    this.date.content = this.content
    let url = `http://101.37.119.148:3000/questions/${this._id}/answers`
    let headerOption = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json', "Authorization": `bearer ${this.cookies.token} `
      })
    }
    this.http.post(url, this.date, headerOption).subscribe((res) => { console.log(res) })
    setTimeout(() => { location.reload() }, 1000)
  }
  ngOnInit() {
  }

}
