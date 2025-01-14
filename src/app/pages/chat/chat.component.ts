import { Component } from '@angular/core';
import {ArrowLeftComponent} from '../../../icons/arrow-left/arrow-left.component';
import {ElipseComponent} from '../../../icons/elipse/elipse.component';
import {MapMuseumComponent} from '../../../icons/map-museum/map-museum.component';
import {Router} from '@angular/router';
import {ChatSuggestionsComponent} from '../../components/chat-suggestions/chat-suggestions.component';
import {CommonModule} from '@angular/common';
import {Message} from '../../types/message.type';
import {ChatDialogComponent} from '../../components/chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat',
  imports: [
    ArrowLeftComponent,
    ElipseComponent,
    MapMuseumComponent,
    ChatSuggestionsComponent,
    CommonModule,
    ChatDialogComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  constructor(private router: Router) {
  }

  questions: Message[] = [];

  sendSuggestionQuestion(question: string) {
    this.questions.push({
      type: 'request',
      message: question
    })
  }

  openHome() {
    this.router.navigate(['/']);
  }
}
