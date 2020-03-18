import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HotCardComponent, DialogMyComponent, BackButtonComponent, ScrollableTabComponent } from './components'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyRoutingModule } from '../my/my-routing.module'
import { DialogQuestionComponent, MyQuestionComponent, TopicCardComponent, VerticalGridComponent } from './components'
import { AvatarDirective } from './directives'
@NgModule({
  declarations: [HotCardComponent, DialogMyComponent, BackButtonComponent, ScrollableTabComponent, DialogQuestionComponent, MyQuestionComponent, AvatarDirective, TopicCardComponent, VerticalGridComponent],
  imports: [CommonModule, FontAwesomeModule, MyRoutingModule, FormsModule],
  exports: [HotCardComponent, FontAwesomeModule, DialogMyComponent, BackButtonComponent, ScrollableTabComponent, DialogQuestionComponent, FormsModule, MyQuestionComponent, AvatarDirective, TopicCardComponent, VerticalGridComponent],
  providers: [],
})
export class ShareModule { }