import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'
import { HomeContainerComponent } from './components'
import { HomeRecommendComponent } from './components'
import { HomeHotComponent } from './components'
import { ShareModule } from '../shared'
@NgModule({
  declarations: [HomeContainerComponent, HomeHotComponent, HomeRecommendComponent],
  imports: [CommonModule, HomeRoutingModule, ShareModule],
  exports: [HomeRoutingModule, HomeContainerComponent, HomeHotComponent, HomeRecommendComponent],
  providers: [],
})
export class HomeModule { }