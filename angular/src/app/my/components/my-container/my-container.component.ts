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
  select1


  link(menu) {
    this.select1 = menu.id
    this.cookies.set("select1", this.select1, new Date(new Date().getTime() + this.time), "/my");
    this.router.navigate([menu.link])

  }



  handleClick() {
    this.router.navigate(["/discover"])
  }


}
