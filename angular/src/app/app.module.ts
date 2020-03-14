import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home'
import { DiscoverModule } from './discover'
import { ShareModule, DialogMyComponent } from './shared'
import { DialogModule } from './dialog'
import { MyModule } from './my'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DiscoverModule,
    ShareModule,
    DialogModule,
    MyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogMyComponent]
})
export class AppModule { }
