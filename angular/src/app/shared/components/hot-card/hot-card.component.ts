import { Component, OnInit } from '@angular/core';
import { faFire, faShare } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-hot-card',
  templateUrl: './hot-card.component.html',
  styleUrls: ['./hot-card.component.css']
})
export class HotCardComponent implements OnInit {
  fire = faFire
  share = faShare
  constructor() { }

  ngOnInit() {
  }

}
