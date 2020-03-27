import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
export interface MyAnswer {
  content: string
}
@Component({
  selector: 'app-my-answer',
  templateUrl: './my-answer.component.html',
  styleUrls: ['./my-answer.component.css']
})
export class MyAnswerComponent implements OnInit {
  @Input() card: Observable<MyAnswer>
  constructor() { }

  ngOnInit() {
  }

}
