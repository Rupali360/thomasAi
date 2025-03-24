import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public c: ApiServiceService) {}
  title = 'thomasAi';
  chats: { author: string; text: string }[] = [];
  inputText: string = '';

  sendApiRequest() {
    this.chats.push({ author: 'me', text: this.inputText });
    this.c.askAi(this.inputText).subscribe((res: any) => {
      this.chats.push({
        author: 'ai',
        text: res.candidates[0].content.parts[0].text,
      });
    });
    this.inputText = '';
  }
}
