import { Component, OnInit, Input } from '@angular/core';

export interface AnswerCard {
  title: string,
  description: string
}
@Component({
  selector: 'app-particulars-card',
  templateUrl: './particulars-card.component.html',
  styleUrls: ['./particulars-card.component.css']
})
export class ParticularsCardComponent implements OnInit {
  constructor() { }
  @Input() card: AnswerCard




  ngOnInit() {


  }
}
