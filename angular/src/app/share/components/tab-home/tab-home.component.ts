import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface TopMenu {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.component.html',
  styleUrls: ['./tab-home.component.css']
})
export class TabHomeComponent {

  constructor() { }
  @Input() selectTabLink: string
  @Input() menus: TopMenu[] = [{ id: 0, title: "发现", link: "discover" }, { id: 1, title: "回答", link: "answer" }];
  @Input() margin = "0.5rem  2.5rem";
  @Output() tabSelected = new EventEmitter();
  handSelect(index: number) {
    this.tabSelected.emit(this.menus[index]);



  }


}
