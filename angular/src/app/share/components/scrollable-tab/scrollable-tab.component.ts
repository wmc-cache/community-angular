import { Component, Input, Output, EventEmitter } from "@angular/core";
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
export class ScrollableTabComponent {

  @Input() menus: TopMenu[] = [{ id: 1, title: "首页", link: "home" }, { id: 2, title: "发现", link: "discover" }, { id: 3, title: "回答", link: "answer" }];
  @Input() selectLink: string
  @Input() titleColor = "";
  @Input() titleActiveColor = "#108ee9";
  @Input() underColor = "#108ee9";
  @Input() margin = "0.5rem  2.5rem";

  @Output() tabselected = new EventEmitter();

  handselect(index) {

    this.tabselected.emit(this.menus[index]);
  }
}
