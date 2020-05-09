import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicCard, ToolService } from 'src/app/share';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.css']
})
export class DiscoverContainerComponent implements OnInit {
  cards$: Observable<TopicCard[]>
  value: string
  constructor(private http: HttpClient, private tool: ToolService) { }
  change = this.tool.debounce(() => { this.cards$ = this.http.get<TopicCard[]>(`http://101.37.119.148:3000/Topics?q=${this.value}`) }, 500)




  ngOnInit() {
    this.cards$ = this.http.get<TopicCard[]>('http://101.37.119.148:3000/topics')
  }

}
