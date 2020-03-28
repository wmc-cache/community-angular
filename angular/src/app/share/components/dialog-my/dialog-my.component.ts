import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DialogService } from 'src/app/dialog';
@Component({
  selector: 'app-dialog-my',
  templateUrl: './dialog-my.component.html',
  styleUrls: ['./dialog-my.component.css']
})
export class DialogMyComponent implements OnInit {

  time: number = 2 * 60 * 60 * 1000;

  constructor(private dialogService: DialogService, private cookies: CookieService, private router: Router) { }
  handleClick() {
    this.router.navigate(['/my']);
    this.dialogService.close()
  }
  navigate() {

    this.router.navigate(['/login']);
    this.dialogService.close()
    setTimeout(() => { this.cookies.deleteAll() }, 500)


  }

  ngOnInit() {
  }

}
