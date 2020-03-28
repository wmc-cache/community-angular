import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TabMyComponent, DialogMyComponent, BackButtonComponent, TabHomeComponent } from './components'

import { MyRoutingModule } from '../my/my-routing.module'
import { MyAnswerComponent, DialogAnswerComponent, MyTopicComponent, DialogQuestionComponent, MyQuestionComponent, TopicCardComponent, VerticalGridComponent } from './components'

@NgModule({
  declarations: [TabMyComponent, TabHomeComponent, MyAnswerComponent, DialogAnswerComponent, MyTopicComponent, DialogMyComponent, BackButtonComponent, DialogQuestionComponent, MyQuestionComponent, TopicCardComponent, VerticalGridComponent],
  imports: [CommonModule, MyRoutingModule, FormsModule],
  exports: [TabMyComponent, TabHomeComponent, MyAnswerComponent, DialogAnswerComponent, MyTopicComponent, DialogMyComponent, BackButtonComponent, DialogQuestionComponent, FormsModule, MyQuestionComponent, TopicCardComponent, VerticalGridComponent],
  providers: [],
})
export class ShareModule { }