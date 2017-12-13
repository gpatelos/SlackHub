import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ActiveUserComponent} from './active-user/active-user.component';
import {ActiveChatComponent} from './active-chat/active-chat.component';
import {PostToActiveChatComponent} from './post-to-active-chat/post-to-active-chat.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActiveChatComponent,
        ActiveUserComponent,
        PostToActiveChatComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Slack Hub'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Slack Hub');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Slack Hub');
  }));
});
