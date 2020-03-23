import { Component, OnInit } from '@angular/core';
import { faUser, faUserPlus, faCog, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-dialog-my',
  templateUrl: './dialog-my.component.html',
  styleUrls: ['./dialog-my.component.css']
})
export class DialogMyComponent implements OnInit {
  cog = faCog
  user = faUser
  userPlus = faUserPlus
  edit = faEdit
  time: number = 2 * 60 * 60 * 1000;

  constructor(private cookies: CookieService, private router: Router) { }

  navigate() {

    this.router.navigate(['/login']);

    setTimeout(() => { this.cookies.deleteAll() }, 500)


  }

  ngOnInit() {
  }

}
