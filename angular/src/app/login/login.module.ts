import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components'
import { LoginRoutingModule } from './login-routing.module'
import { RegisterComponent } from './components'
import { ShareModule } from '../share'
@NgModule({
  declarations: [LoginContainerComponent, RegisterComponent],
  imports: [CommonModule, LoginRoutingModule, ShareModule],
  exports: [LoginContainerComponent, RegisterComponent],
  providers: [],
})
export class LoginModule { }