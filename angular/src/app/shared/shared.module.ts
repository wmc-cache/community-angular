import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotCardComponent, DialogMyComponent, BackButtonComponent, ScrollableTabComponent } from './components'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyRoutingModule } from '../my/my-routing.module'
@NgModule({
  declarations: [HotCardComponent, DialogMyComponent, BackButtonComponent, ScrollableTabComponent],
  imports: [CommonModule, FontAwesomeModule, MyRoutingModule],
  exports: [HotCardComponent, FontAwesomeModule, DialogMyComponent, BackButtonComponent, ScrollableTabComponent],
  providers: [],
})
export class ShareModule { }