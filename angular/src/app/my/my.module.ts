import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../shared'
import { MyContainerComponent } from './components'
import { MyRoutingModule } from './my-routing.module'
@NgModule({
  declarations: [MyContainerComponent],
  imports: [CommonModule, MyRoutingModule, ShareModule],
  exports: [MyContainerComponent, MyRoutingModule],
  providers: [],
})
export class MyModule { }