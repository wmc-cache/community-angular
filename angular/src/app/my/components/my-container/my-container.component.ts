import { Component, OnInit } from '@angular/core';
import { MyQuestionCard } from 'src/app/share';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
interface MyCard {
  name: string,
  avatar_url: "http://101.37.119.148:3000/uploads/upload_c0e0fdc41d8e7ed4caac0bbfa67b2f7f.png",
  headline: "没有人因水的平淡而厌倦饮水"
}
@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent implements OnInit {

  my$: Observable<MyCard>

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.my$ = this.http.get<MyCard>(`http://101.37.119.148:3000/users/5e71ed676095f90cc049bc0c`)
    console.log(this.my$)
  }

}
