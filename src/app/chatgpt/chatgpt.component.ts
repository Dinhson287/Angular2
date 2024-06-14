import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ChatGptService } from '../service/chatgpt.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chatgpt',
  standalone: true,
  imports: [MenuComponent, FormsModule,CommonModule],
  templateUrl: './chatgpt.component.html',
  styleUrl: './chatgpt.component.css'
})
export class ChatgptComponent {
  userMessage: string = '';
  chatHistory: string[] = [];

  constructor(private chatGptService: ChatGptService) { }

  sendMessage() {
    this.chatHistory.push('You: ' + this.userMessage);
    this.chatGptService.getChatResponse(this.userMessage).subscribe(response => {
      this.chatHistory.push('ChatGPT: ' + response.choices[0].text.trim());
    });
    this.userMessage = '';
  }
}
