import { Component, OnInit, Input } from '@angular/core';
export interface ContentCard {
  content: string,
  answerer: string
}
@Component({
  selector: 'app-answer-content',
  templateUrl: './answer-content.component.html',
  styleUrls: ['./answer-content.component.css']
})
export class AnswerContentComponent implements OnInit {
  @Input() card: ContentCard
  constructor() { }

  ngOnInit() {
  }

}
