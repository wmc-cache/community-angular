import { Component, OnInit } from '@angular/core';
import { faUser, faUserPlus, faCog, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
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


  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
