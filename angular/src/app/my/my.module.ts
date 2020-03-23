import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share'
import { MyContainerComponent, TopicComponent, AnswerComponent } from './components'
import { MyRoutingModule } from './my-routing.module'
@NgModule({
  declarations: [MyContainerComponent, TopicComponent, AnswerComponent],
  imports: [CommonModule, MyRoutingModule, ShareModule],
  exports: [MyContainerComponent, MyRoutingModule, TopicComponent, AnswerComponent],
  providers: [],
})
export class MyModule { }