import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoverModule } from './discover'
import { ShareModule, DialogPushComponent, DialogMyComponent, DialogQuestionComponent, DialogAnswerComponent } from './share'
import { DialogModule } from './dialog'
import { MyModule } from './my'
import { HttpClientModule } from "@angular/common/http";
import { LoginModule } from './login'
import { ContentModule } from './content'
import { AnswerModule } from './answer'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiscoverModule,
    ShareModule,
    DialogModule,
    MyModule,
    HttpClientModule,
    LoginModule,
    ContentModule,
    AnswerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [DialogPushComponent, DialogMyComponent, DialogQuestionComponent, DialogAnswerComponent]
})
export class AppModule { }
