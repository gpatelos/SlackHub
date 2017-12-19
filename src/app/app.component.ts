import { Component } from '@angular/core';
import {ChatService} from './service/chat-service';
import { HttpModule } from '@angular/Http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService,HttpModule]
})
export class AppComponent {
  title = 'Slack Hub';
}
