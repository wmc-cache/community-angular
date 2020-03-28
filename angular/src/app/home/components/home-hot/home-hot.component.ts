import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
export interface hotCard {
  id: string,
  title: string,
  description: string,
  img: string,
  hot: string
}
@Component({
  selector: 'app-home-hot',
  templateUrl: './home-hot.component.html',
  styleUrls: ['./home-hot.component.css']
})
export class HomeHotComponent implements OnInit {
  value = ""
  cards$: Observable<hotCard>
  constructor(private http: HttpClient) { }


  handleClick() {
    this.value = ""
    this.cards$ = this.http.get<hotCard>("http://101.37.119.148:3000/hots")
  }
  valueChange() {
    let q = `?q=${this.value}`
    this.cards$ = this.http.get<hotCard>(`http://101.37.119.148:3000/hots${q}`)
  }


  ngOnInit() {
    this.cards$ = this.http.get<hotCard>("http://101.37.119.148:3000/hots")
  }

}
