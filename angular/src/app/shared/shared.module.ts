import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotCardComponent } from './components'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [HotCardComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HotCardComponent, FontAwesomeModule],
  providers: [],
})
export class ShareModule { }