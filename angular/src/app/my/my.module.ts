import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share'
import { MyContainerComponent, TopicComponent } from './components'
import { MyRoutingModule } from './my-routing.module'
@NgModule({
  declarations: [MyContainerComponent, TopicComponent],
  imports: [CommonModule, MyRoutingModule, ShareModule],
  exports: [MyContainerComponent, MyRoutingModule, TopicComponent],
  providers: [],
})
export class MyModule { }