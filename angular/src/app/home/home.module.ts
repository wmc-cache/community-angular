import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'
import { HomeContainerComponent, HomeRecommendComponent, HomeHotComponent, HomeAttentionComponent } from './components'

import { ShareModule } from '../share'
@NgModule({
  declarations: [HomeContainerComponent, HomeHotComponent, HomeRecommendComponent, HomeAttentionComponent],
  imports: [CommonModule, HomeRoutingModule, ShareModule],
  exports: [HomeRoutingModule, HomeContainerComponent, HomeHotComponent, HomeRecommendComponent, HomeAttentionComponent],
  providers: [],
})
export class HomeModule { }