import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginContainerComponent } from './components'


const routes: Routes = [
  { path: 'login', component: LoginContainerComponent },

]
@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
