import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DiscoverContainerComponent } from './components'

const routes: Routes = [
  { path: 'discover', component: DiscoverContainerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
