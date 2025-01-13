import { Component } from '@angular/core';
import {ArrowLeftComponent} from '../../../icons/arrow-left/arrow-left.component';
import {ElipseComponent} from '../../../icons/elipse/elipse.component';
import {MapMuseumComponent} from '../../../icons/map-museum/map-museum.component';
import {Router} from '@angular/router';
import {ChatSuggestionsComponent} from '../../components/chat-suggestions/chat-suggestions.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [
    ArrowLeftComponent,
    ElipseComponent,
    MapMuseumComponent,
    ChatSuggestionsComponent,
    CommonModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  constructor(private router: Router) {
  }

  questions: string[] = [];

  sendSuggestionQuestion(question: string) {
    this.questions.push(question);
  }

  openHome() {
    this.router.navigate(['/']);
  }
}
