import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color1 = "skyblue"
  backgroundColor1 = "#108ee9"
  handleClick1() {
    if (this.color1 === "") {
      this.color1 = "skyblue"
      this.backgroundColor1 = "#108ee9"

    }
    if (this.color2 === "skyblue") {
      this.color2 = ""
      this.backgroundColor2 = ""
    }
  }
  color2 = ""
  backgroundColor2 = ""
  handleClick2() {
    if (this.color2 === "") {
      this.color2 = "skyblue"
      this.backgroundColor2 = "#108ee9"
    }
    if (this.color1 === "skyblue") {
      this.color1 = ""
      this.backgroundColor1 = ""
    }
  }
}
