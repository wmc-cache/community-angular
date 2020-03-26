import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnswerContainerComponent } from './components'
import { AnswerDetailComponent } from './components'

const routes: Routes = [
  {
    path: "answer", component: AnswerContainerComponent
  },
  { path: "answer/detail", component: AnswerDetailComponent }


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }
