import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent, RegisterContainerComponent } from './components'
import { LoginRoutingModule } from './login-routing.module'
import { ShareModule } from '../share'

@NgModule({
  declarations: [LoginContainerComponent, RegisterContainerComponent],
  imports: [CommonModule, LoginRoutingModule, ShareModule],
  exports: [LoginContainerComponent, RegisterContainerComponent],
  providers: [],
})
export class LoginModule { }