import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyContainerComponent, TopicComponent, AnswerComponent, QuestionComponent } from './components'


const routes: Routes = [
  {
    path: 'my', component: MyContainerComponent,
    children: [
      { path: "", redirectTo: "question", pathMatch: "full" },
      {
        path: "topic",
        component: TopicComponent

      },
      {
        path: "answer",
        component: AnswerComponent

      },
      {
        path: "question",
        component: QuestionComponent
      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
