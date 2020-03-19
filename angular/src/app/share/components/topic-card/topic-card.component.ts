import { Component, OnInit, Input } from '@angular/core';
export interface TopicCard {
  name: string,
  avatar_url: string,
  introduction: string
}
@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {
  @Input() card: TopicCard
  constructor() { }

  ngOnInit() {
  }

}
