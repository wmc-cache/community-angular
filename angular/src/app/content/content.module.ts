import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module'
import { ContentContainerComponent, ContentCardComponent } from "./components"
import { AnswerModule } from '../answer'
@NgModule({
  declarations: [ContentContainerComponent, ContentCardComponent],
  imports: [CommonModule, ContentRoutingModule, AnswerModule],
  exports: [],
  providers: [],
})
export class ContentModule { }