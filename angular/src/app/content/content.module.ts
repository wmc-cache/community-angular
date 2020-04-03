import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module'
import { ContentContainerComponent, ContentCardComponent } from "./components"
import { AnswerModule } from '../answer'
import { ShareModule } from '../share'
@NgModule({
  declarations: [ContentContainerComponent, ContentCardComponent],
  imports: [CommonModule, ContentRoutingModule, AnswerModule, ShareModule],
  exports: [],
  providers: [],
})
export class ContentModule { }