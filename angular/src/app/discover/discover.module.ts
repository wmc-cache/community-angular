import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverRoutingModule } from './discover-routing.module'
import { DiscoverContainerComponent } from './components'
@NgModule({
  declarations: [DiscoverContainerComponent],
  imports: [CommonModule, DiscoverRoutingModule],
  exports: [DiscoverContainerComponent],
  providers: [],
})
export class DiscoverModule { }