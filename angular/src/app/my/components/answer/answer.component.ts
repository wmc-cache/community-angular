import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() card
  constructor() { }
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', password: 'Dr. What', power: this.powers[0] };
  ngOnInit() {
  }

}
