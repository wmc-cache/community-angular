import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.css']
})
export class DiscoverContainerComponent implements OnInit {
  items = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }]
  constructor() { }

  ngOnInit() {
  }

}
