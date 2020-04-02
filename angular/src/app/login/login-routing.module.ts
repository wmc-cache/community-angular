import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginContainerComponent } from './components'
import { RegisterContainerComponent } from './components'

const routes: Routes = [
  { path: 'login', component: LoginContainerComponent },
  { path: "register", component: RegisterContainerComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
