import {Component, Input} from '@angular/core';
import {Message} from '../../types/message.type';
import {CommonModule, NgClass} from '@angular/common';

@Component({
  selector: 'chat-responses',
  imports: [
    NgClass,
    CommonModule
  ],
  templateUrl: './chat-responses.component.html',
  styleUrl: './chat-responses.component.scss'
})
export class ChatResponsesComponent {
  @Input() message!: Message;
}
