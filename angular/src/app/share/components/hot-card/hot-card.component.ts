import { Component, OnInit, Input } from '@angular/core';
import { faFire, faShare } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
export interface hotCard {
  id: string,
  title: string,
  description: string,
  img: string,
  hot: string
}
@Component({
  selector: 'app-hot-card',
  templateUrl: './hot-card.component.html',
  styleUrls: ['./hot-card.component.css']
})
export class HotCardComponent implements OnInit {
  fire = faFire
  share = faShare
  @Input() card: hotCard

  constructor(private router: Router) { }

  handleClick() {
    this.router.navigate(["particulars", this.card.id])

  }


  ngOnInit() {
  }

}
