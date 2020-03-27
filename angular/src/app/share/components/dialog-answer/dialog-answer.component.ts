import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-answer',
  templateUrl: './dialog-answer.component.html',
  styleUrls: ['./dialog-answer.component.css']
})
export class DialogAnswerComponent implements OnInit {
  date = { content: "" }

  _id
  content = ""
  token
  constructor(private route: ActivatedRoute, private http: HttpClient, private cookies: CookieService) { }
  submit() {
    this.route.queryParamMap.subscribe(params => { this._id = params.get('_id') })
    this.date.content = this.content
    this.token = this.cookies.get("token");
    let url = `http://101.37.119.148:3000/questions/${this._id}/answers`
    let headerOption = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json', "Authorization": `bearer ${this.token} `
      })
    }
    this.http.post(url, this.date, headerOption).subscribe((res) => { console.log(res) })
    setTimeout(() => { location.reload() }, 1000)
  }
  ngOnInit() {
  }

}
