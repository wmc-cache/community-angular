import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/share';
import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { Tab } from 'src/app/app.component';
import { map, filter } from "rxjs/operators"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent implements OnInit {
  constructor(private http: HttpClient, private location: Location, private cookies: CookieService, private router: Router) { }
  menus$: Observable<Tab>
  selectTabLink$: Observable<string>

  link(menu) {
    this.router.navigate([menu.link])
  }
  handleClick() {
    this.router.navigate(["/discover"])

  }
  ngOnInit() {
    this.selectTabLink$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split("/");
        return `${arr[1]}/${arr[2]}`
      }))

    this.menus$ = this.http.get<Tab>(`http://101.37.119.148:3000/tabs`).pipe(map(all => all.filter(ele => ele.id >= 2)))
  }

}
