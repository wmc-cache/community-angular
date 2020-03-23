import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContentContainerComponent } from './components'

const routes: Routes = [
  { path: "content", component: ContentContainerComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
