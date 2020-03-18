import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components'
import { LoginRoutingModule } from './login-routing.module'
import { ShareModule } from '../share'
@NgModule({
  declarations: [LoginContainerComponent],
  imports: [CommonModule, LoginRoutingModule, ShareModule],
  exports: [LoginContainerComponent],
  providers: [],
})
export class LoginModule { }