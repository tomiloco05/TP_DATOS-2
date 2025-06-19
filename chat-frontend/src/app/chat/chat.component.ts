import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { Message } from '../message';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getAllMessages().subscribe(data => (this.messages = data));
  }

  sendMessage() {
    const msg: Message = {
      sender: 'user1',
      receiver: 'user2',
      content: this.newMessage
    };
    this.messageService.sendMessage(msg).subscribe(() => {
      this.newMessage = '';
      this.loadMessages();
    });
  }
}
