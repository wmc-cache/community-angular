import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerRoutingModule } from './answer-routing-module'
import { AnswerContainerComponent } from './components'
import { AnswerCardComponent, AnswerDetailComponent, AnswerContentComponent } from './components'
import { ParticularsModule } from '../particulars'
@NgModule({
  declarations: [AnswerContainerComponent, AnswerCardComponent, AnswerDetailComponent, AnswerContentComponent],
  imports: [CommonModule, AnswerRoutingModule, ParticularsModule],
  exports: [AnswerContainerComponent, AnswerCardComponent, AnswerDetailComponent, AnswerContainerComponent],
  providers: [],
})
export class AnswerModule { }