import { Component, OnInit, SimpleChanges, DoCheck } from '@angular/core';

import { DialogMyComponent, DialogQuestionComponent } from './share';
import { DialogService } from './dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyCard } from './my';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private location: Location, private cookies: CookieService, private router: Router, private dialogService: DialogService, private http: HttpClient, private route: ActivatedRoute) { }
  time: number = 2 * 60 * 60 * 10000;
  my$: Observable<MyCard>
  _id
  select

  link(menu) {
    this.select = menu.id
    this.cookies.set("select", this.select, new Date(new Date().getTime() + this.time), "./");
    this.router.navigate([menu.link])
  }

  ngOnInit() {

    this._id = this.cookies.get("_id");
    this.my$ = this.http.get<MyCard>(`http://101.37.119.148:3000/users/${this._id}`)
  }



  question() {

    this.dialogService.open(DialogQuestionComponent, {
      inputs: {},
      outputs: {},

      position: {
        top: "20%",
        left: '75%',
        width: '50%',
        height: "40%"
      }
    });
  }

  handleClick() {

    this.dialogService.open(DialogMyComponent, {
      inputs: {},
      outputs: {},
      position: {
        top: `10%`,
        left: '139%',
        width: '8%',
        height: `25%`
      }
    });
  }
  removeDialog() {
    this.dialogService.close()

  }



}