import {Component, Input} from '@angular/core';
import {Message} from '../../types/message.type';
import {ChatResponsesComponent} from '../chat-responses/chat-responses.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'chat-dialog',
  imports: [
    ChatResponsesComponent,
    CommonModule
  ],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.scss'
})
export class ChatDialogComponent {

  @Input() messages: Message[] = [];
}
