import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hotCard } from 'src/app/share';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-particulars-container",
  templateUrl: "./particulars-container.component.html",
  styleUrls: ["./particulars-container.component.css"]
})
export class ParticularsContainerComponent implements OnInit {
  id

  constructor(private http: HttpClient, private route: ActivatedRoute) { }


  cards$: Observable<hotCard>



  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.id = params.get('id') })
    console.log(this.id)
    let q = `?q=${this.id}`
    this.cards$ = this.http.get<hotCard>(`http://101.37.119.148:3000/hots${q}`)
  }
}
