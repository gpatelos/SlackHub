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
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'
=======
import { HttpModule } from '@angular/http';
>>>>>>> 618bb421267c5d10b6eb3ecf18951a19b7cd341c


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
<<<<<<< HEAD
    FormsModule,
    HttpClientModule
=======
    HttpModule,
    FormsModule
>>>>>>> 618bb421267c5d10b6eb3ecf18951a19b7cd341c
  ],
  providers: [ChatService, SpringchatserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
