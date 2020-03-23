import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerRoutingModule } from './answer-routing-module'
import { AnswerContainerComponent } from './components'
import { AnswerCardComponent } from './components'
@NgModule({
  declarations: [AnswerContainerComponent, AnswerCardComponent],
  imports: [CommonModule, AnswerRoutingModule],
  exports: [AnswerContainerComponent, AnswerCardComponent],
  providers: [],
})
export class AnswerModule { }