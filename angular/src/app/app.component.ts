import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color1 = "#fff"
  backgroundColor1 = "#108ee9"
  handleClick1() {
    if (this.color1 === "") {
      this.color1 = "#fff"
      this.backgroundColor1 = "#108ee9"

    }
    if (this.color2 === "#fff") {
      this.color2 = ""
      this.backgroundColor2 = ""
    }
  }
  color2 = ""
  backgroundColor2 = ""
  handleClick2() {
    if (this.color2 === "") {
      this.color2 = "#fff"
      this.backgroundColor2 = "#108ee9"
    }
    if (this.color1 === "#fff") {
      this.color1 = ""
      this.backgroundColor1 = ""
    }
  }
}
