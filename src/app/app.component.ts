import { Component } from '@angular/core';
import {ChatService} from './chat-service';
import {SpringchatserviceService} from './springchatservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService, SpringchatserviceService]
})
export class AppComponent {
  title = 'Slack Hub';
}
