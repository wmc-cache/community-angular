import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TopMenu } from '..';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab-my',
  templateUrl: './tab-my.component.html',
  styleUrls: ['./tab-my.component.css']
})
export class TabMyComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() selectTabLink: string
  @Input() menus: TopMenu[] = [{ id: 0, title: "问题", link: "my/question" }, { id: 1, title: "回答", link: "my/answer" }, { id: 2, title: "话题", link: "my/topic" }];
  @Input() margin = "0.5rem  2.5rem";
  @Output() tabSelected = new EventEmitter();



  handSelect(index: number) {
    this.tabSelected.emit(this.menus[index]);
  }
  ngOnInit(): void {
    console.log(this.selectTabLink)
    if (this.selectTabLink == null) {
      this.router.navigate(["my/question"])
      this.selectTabLink = "my/question"

    }



  }

}
