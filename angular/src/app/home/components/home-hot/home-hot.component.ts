import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-hot',
  templateUrl: './home-hot.component.html',
  styleUrls: ['./home-hot.component.css']
})
export class HomeHotComponent implements OnInit {
  cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  constructor() { }

  ngOnInit() {
  }

}
