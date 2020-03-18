import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { hotCard } from 'src/app/share';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-particulars-card',
  templateUrl: './particulars-card.component.html',
  styleUrls: ['./particulars-card.component.css']
})
export class ParticularsCardComponent implements OnInit {
  constructor() { }
  @Input() card: hotCard




  ngOnInit() {


  }
}
