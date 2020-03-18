import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverRoutingModule } from './discover-routing.module'
import { DiscoverContainerComponent } from './components'
import { ShareModule } from '../share'
@NgModule({
  declarations: [DiscoverContainerComponent],
  imports: [CommonModule, DiscoverRoutingModule, ShareModule],
  exports: [DiscoverContainerComponent],
  providers: [],
})
export class DiscoverModule { }