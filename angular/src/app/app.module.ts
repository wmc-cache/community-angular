import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule, DialogPushComponent, DialogMyComponent, DialogQuestionComponent, DialogAnswerComponent } from './share'
import { MyModule } from './my'
import { LoginModule } from './login'
import { ContentModule } from './content'
import { AnswerModule } from './answer'
import { DiscoverModule } from './discover'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiscoverModule,
    ShareModule,
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
