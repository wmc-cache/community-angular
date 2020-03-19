import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicCard } from 'src/app/share';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.css']
})
export class DiscoverContainerComponent implements OnInit {
  cards$: Observable<TopicCard[]>
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cards$ = this.http.get<TopicCard[]>('http://101.37.119.148:3000/topics')
  }

}
