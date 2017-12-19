import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { ChatService } from './chat-service';
import { SpringchatserviceService } from './springchatservice.service'
import { AppComponent } from './app.component';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { PostToActiveChatComponent } from './post-to-active-chat/post-to-active-chat.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ActiveUserComponent,
    PostToActiveChatComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatService, SpringchatserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
