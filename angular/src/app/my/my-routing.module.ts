import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyContainerComponent, TopicComponent } from './components'


const routes: Routes = [
  {
    path: 'my', component: MyContainerComponent,



    children: [
      { path: "", redirectTo: "topic", pathMatch: "full" },
      {
        path: "topic",
        component: TopicComponent

      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
