import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module'
import { ContentContainerComponent, ContentCardComponent } from "./components"

@NgModule({
  declarations: [ContentContainerComponent, ContentCardComponent],
  imports: [CommonModule, ContentRoutingModule],
  exports: [],
  providers: [],
})
export class ContentModule { }