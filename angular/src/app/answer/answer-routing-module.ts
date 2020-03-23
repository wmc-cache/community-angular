import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnswerContainerComponent } from './components'


const routes: Routes = [
  { path: "answer", component: AnswerContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }
