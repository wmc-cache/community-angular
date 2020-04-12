import { Component, OnInit } from '@angular/core';
import { DialogMyComponent, DialogQuestionComponent, CookiesService } from './share';
import { DialogService } from './dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyCard } from './my';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators'
export interface Tab {
  filter(arg0: (ele: any) => boolean): any;
  id: number,
  title: string,
  link: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cookies: CookiesService, private router: Router, private dialogService: DialogService, private http: HttpClient, private route: ActivatedRoute) {

  }
  time: number = 2 * 60 * 60 * 10000;
  my$: Observable<MyCard>
  menus$: Observable<Tab>
  selectTabLink$: Observable<string>
  link(menu) {

    this.router.navigate([menu.link])
  }


  ngOnInit() {
    this.selectTabLink$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return `${arr[1]}`
      }))

    this.menus$ = this.http.get<Tab>(`http://101.37.119.148:3000/tabs`).pipe(map(all => all.filter(ele => ele.id < 2)))
    this.my$ = this.http.get<MyCard>(`http://101.37.119.148:3000/users/${this.cookies._id}`)
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