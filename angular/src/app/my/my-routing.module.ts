import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyContainerComponent, TopicComponent, AnswerComponent } from './components'


const routes: Routes = [
  {
    path: 'my', component: MyContainerComponent,



    children: [
      { path: "", redirectTo: "topic", pathMatch: "full" },
      {
        path: "topic",
        component: TopicComponent

      },
      {
        path: "answer",
        component: AnswerComponent

      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
