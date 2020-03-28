import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/share';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent {
  time: number = 2 * 60 * 60 * 10000;
  cards: TopMenu[] = [{ id: 0, title: "问题", link: "my/question" }, { id: 1, title: "回答", link: "my/answer" }, { id: 2, title: "话题", link: "my/topic" }];

  constructor(private cookies: CookieService, private router: Router) { }
  select


  link(menu) {

    this.router.navigate([menu.link])

  }
  handleClick() {
    this.router.navigate(["/discover"])
    this.cookies.delete("select", "./my")

  }


}
