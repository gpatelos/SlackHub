import { Component } from '@angular/core';
import {ChatService} from './chat-service';
<<<<<<< HEAD
import {SpringchatserviceService} from './springchatservice.service'
=======
import { HttpModule } from '@angular/Http';
>>>>>>> 618bb421267c5d10b6eb3ecf18951a19b7cd341c

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
<<<<<<< HEAD
  providers: [ChatService, SpringchatserviceService]
=======
  providers: [ChatService,HttpModule]
>>>>>>> 618bb421267c5d10b6eb3ecf18951a19b7cd341c
})
export class AppComponent {
  title = 'Slack Hub';
}
