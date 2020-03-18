import { Component } from '@angular/core';
import { faComments, faBell } from '@fortawesome/free-solid-svg-icons'
import { DialogMyComponent, DialogQuestionComponent } from './share';
import { DialogService } from './dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogService: DialogService) { }
  comments = faComments
  bell = faBell
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


  question() {

    this.dialogService.open(DialogQuestionComponent, {
      inputs: {},
      outputs: {},

      position: {
        top: "20%",
        left: '75%',
        width: '50%',
        height: "60%"
      }
    });
  }

  handleClick() {

    this.dialogService.open(DialogMyComponent, {
      inputs: {},
      outputs: {},
      position: {
        top: `10%`,
        left: '139%',
        width: '8%',
        height: `25%`
      }
    });
  }
  removeDialog() {
    this.dialogService.close()
  }
}
