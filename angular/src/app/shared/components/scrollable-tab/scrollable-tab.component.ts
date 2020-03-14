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
  selectindex = 0;
  @Input() menus: TopMenu[] = [{ id: 1, title: "提问", link: "" }, { id: 2, title: "回答", link: "" }, { id: 3, title: "文章", link: "" }, { id: 4, title: "专栏", link: "" }, { id: 5, title: "想法", link: "" }];
  @Input() backgroundColor = "skyblue ";
  @Input() titleColor = "";
  @Input() titleActiveColor = "#108ee9";
  @Input() underColor = "#108ee9";
  @Input() margin = "0";
  @Output() tabselected = new EventEmitter();

  handselect(index) {
    this.selectindex = index;
    this.tabselected.emit(this.menus[this.selectindex]);
  }
}
