import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerRoutingModule } from './answer-routing-module'
import { AnswerContainerComponent } from './components'
import { AnswerCardComponent, AnswerDetailComponent } from './components'
import { ParticularsModule } from '../particulars'
@NgModule({
  declarations: [AnswerContainerComponent, AnswerCardComponent, AnswerDetailComponent],
  imports: [CommonModule, AnswerRoutingModule, ParticularsModule],
  exports: [AnswerContainerComponent, AnswerCardComponent, AnswerDetailComponent],
  providers: [],
})
export class AnswerModule { }