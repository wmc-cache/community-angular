import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/share';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent {
  time: number = 2 * 60 * 60 * 10000;


  constructor(private location: Location, private cookies: CookieService, private router: Router) { }
  select = "0"
  select1


  link(menu) {
    this.select1 = menu.id
    this.cookies.set("select1", this.select1, new Date(new Date().getTime() + this.time), "/my");
    this.router.navigate([menu.link])

  }



  handleClick() {
    this.router.navigate(["/discover"])
    this.cookies.set("select", this.select, new Date(new Date().getTime() + this.time), "/");
    setTimeout(() => { location.reload() }, 1)
  }


}
