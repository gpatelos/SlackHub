import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { PostToActiveChatComponent } from './post-to-active-chat/post-to-active-chat.component';


@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ActiveUserComponent,
    PostToActiveChatComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
