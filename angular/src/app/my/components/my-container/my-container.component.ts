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


  constructor(private cookies: CookieService, private router: Router) { }
  select


  link(menu) {
    this.select = menu.id
    this.cookies.set("select1", this.select, new Date(new Date().getTime() + this.time), "./");
    this.router.navigate([menu.link])

  }



  handleClick() {
    this.router.navigate(["/discover"])
  }


}
