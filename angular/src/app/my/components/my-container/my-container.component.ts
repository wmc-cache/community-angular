import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/share';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent {

  cards: TopMenu[] = [{ id: 1, title: "问题", link: "my/question" }, { id: 2, title: "回答", link: "my/answer" }, { id: 3, title: "话题", link: "my/topic" }];

  constructor(private cookies: CookieService, private router: Router) { }



  link(menu) {
    this.router.navigate([menu.link])

  }
  handleClick() {
    this.cookies.deleteAll("/my")
  }


}
