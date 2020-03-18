import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './components'
import { HomeHotComponent } from './components'
import { HomeRecommendComponent } from './components'
import { HomeAttentionComponent } from './components'
const routes: Routes = [
  {
    path: 'home', component: HomeContainerComponent,


    children: [
      { path: "", redirectTo: "hot", pathMatch: "full" },
      {
        path: "hot",
        component: HomeHotComponent

      },
      {
        path: "recommend",
        component: HomeRecommendComponent
      },
      {
        path: "attention",
        component: HomeAttentionComponent
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
