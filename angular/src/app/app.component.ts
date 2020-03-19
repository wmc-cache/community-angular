import { Component, OnInit, SimpleChanges, DoCheck } from '@angular/core';
import { faComments, faBell } from '@fortawesome/free-solid-svg-icons'
import { DialogMyComponent, DialogQuestionComponent } from './share';
import { DialogService } from './dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyCard } from './my';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private location: Location, private cookies: CookieService, private router: Router, private dialogService: DialogService, private http: HttpClient, private route: ActivatedRoute) { }
  comments = faComments
  bell = faBell
  my$: Observable<MyCard>
  name = ""
  time: number = 2 * 60 * 60 * 1000;
  _id

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
    this.router.navigate(['/discover'])
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
    location.reload();
  }


  ngOnInit() {



    this._id = this.cookies.get("_id");
    this.my$ = this.http.get<MyCard>(`http://101.37.119.148:3000/users/${this._id}`)






  }
}