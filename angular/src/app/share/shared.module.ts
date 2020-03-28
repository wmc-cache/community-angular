import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DialogMyComponent, BackButtonComponent, ScrollableTabComponent } from './components'

import { MyRoutingModule } from '../my/my-routing.module'
import { MyAnswerComponent, DialogAnswerComponent, MyTopicComponent, DialogQuestionComponent, MyQuestionComponent, TopicCardComponent, VerticalGridComponent } from './components'

@NgModule({
  declarations: [MyAnswerComponent, DialogAnswerComponent, MyTopicComponent, DialogMyComponent, BackButtonComponent, ScrollableTabComponent, DialogQuestionComponent, MyQuestionComponent, TopicCardComponent, VerticalGridComponent],
  imports: [CommonModule, MyRoutingModule, FormsModule],
  exports: [MyAnswerComponent, DialogAnswerComponent, MyTopicComponent, DialogMyComponent, BackButtonComponent, ScrollableTabComponent, DialogQuestionComponent, FormsModule, MyQuestionComponent, TopicCardComponent, VerticalGridComponent],
  providers: [],
})
export class ShareModule { }