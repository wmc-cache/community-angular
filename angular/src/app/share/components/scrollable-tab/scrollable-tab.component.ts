import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";
export interface TopMenu {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: "app-scrollable-tab",
  templateUrl: "./scrollable-tab.component.html",
  styleUrls: ["./scrollable-tab.component.css"]
})
export class ScrollableTabComponent implements OnInit {
  constructor(private location: Location, private cookies: CookieService) { }
  @Input() menus: TopMenu[] = [{ id: 0, title: "发现", link: "discover" }, { id: 1, title: "回答", link: "answer" }];
  @Input() margin = "0.5rem  2.5rem";
  @Output() tabSelected = new EventEmitter();
  select
  time: number = 2 * 60 * 60 * 10000;

  handSelect(index: number) {
    this.tabSelected.emit(this.menus[index]);
    setTimeout(() => { location.reload() }, 100)
  }
  ngOnInit(): void {
    this.select = this.cookies.get("select")
  }
}
