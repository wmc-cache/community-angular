import { Component, OnInit, Input } from '@angular/core';
export interface MyQuestionCard {
  id: string,
  title: string,
  description: string,
  img: string,
  hot: string
}
@Component({
  selector: 'app-my-question',
  templateUrl: './my-question.component.html',
  styleUrls: ['./my-question.component.css']
})
export class MyQuestionComponent implements OnInit {
  @Input() card: MyQuestionCard
  constructor() { }

  ngOnInit() {
  }

}
