import { Component } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent {
  color1 = "darkgray"
  color2 = "darkgray"
  color3 = "darkgray"
  handleClick1() {
    if (this.color1 === "darkgray") {
      this.color1 = "#108ee9"
    }
    if (this.color2 === "#108ee9") {
      this.color2 = "darkgray"
    }
    if (this.color3 === "#108ee9") {
      this.color3 = "darkgray"
    }
  }
  handleClick2() {
    if (this.color2 === "darkgray") {
      this.color2 = "#108ee9"
    }
    if (this.color1 === "#108ee9") {
      this.color1 = "darkgray"
    }
    if (this.color3 === "#108ee9") {
      this.color3 = "darkgray"
    }

  }
  handleClick3() {
    if (this.color3 === "darkgray") {
      this.color3 = "#108ee9"
    }
    if (this.color2 === "#108ee9") {
      this.color2 = "darkgray"
    }
    if (this.color1 === "#108ee9") {
      this.color1 = "darkgray"
    }
  }
}
