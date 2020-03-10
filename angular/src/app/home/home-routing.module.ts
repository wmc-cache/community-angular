import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './components'
import { HomeHotComponent } from './components'
import { HomeRecommendComponent } from './components'
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
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
