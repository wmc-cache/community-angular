import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/dialog';
import { DialogAnswerComponent } from '..';
export interface AnswerCard {
  title: string,
  description: string
}
@Component({
  selector: 'app-particulars-card',
  templateUrl: './particulars-card.component.html',
  styleUrls: ['./particulars-card.component.css']
})
export class ParticularsCardComponent implements OnInit {
  constructor(private dialogService: DialogService) { }
  @Input() card: AnswerCard
  handleClick() {
    this.dialogService.open(DialogAnswerComponent, {
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



  ngOnInit() {
  }
}
