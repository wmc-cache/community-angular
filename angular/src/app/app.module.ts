import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home'
import { DiscoverModule } from './discover'
import { ShareModule, DialogMyComponent, DialogQuestionComponent } from './share'
import { DialogModule } from './dialog'
import { MyModule } from './my'
import { ParticularsModule } from './particulars'
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
    HomeModule,
    DiscoverModule,
    ShareModule,
    DialogModule,
    MyModule,
    ParticularsModule,
    HttpClientModule,
    LoginModule,
    ContentModule,
    AnswerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [DialogMyComponent, DialogQuestionComponent]
})
export class AppModule { }
