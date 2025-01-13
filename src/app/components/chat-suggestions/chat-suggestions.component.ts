import {Component, EventEmitter, Output} from '@angular/core';
import {SearchComponent} from '../../../icons/search/search.component';
import {QuestionComponent} from '../../../icons/question/question.component';
import {CommonModule} from '@angular/common';
import {KeyComponent} from '../../../icons/key/key.component';

@Component({
  selector: 'chat-suggestions',
  imports: [
    CommonModule,
    QuestionComponent,
    SearchComponent,
    KeyComponent
  ],
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss',
  standalone: true
})
export class ChatSuggestionsComponent {
@Output() questionSelected = new EventEmitter();

  suggestionTopics = [
    {
      title: "Dúvidas",
      icon:  'question',
      questions: [
        "Qual é o valor para entrar no museu?",
        "Quando o museu está aberto?"
        ]
    },

    {
      title: "Curiosidades",
      icon: 'curiosity',
      questions: [
        "Quem era o prefeito na época da criação?",
        "Quantos cômodos existem no museu?",
        "Quantas peças estão exibidas no museu?"
      ]
    },

    {
      title: "História",
      icon: 'history',
      questions: [
        "Quando o museu foi criado?",
        "Qual é o estilo arquitetônico do prédio?",
        "Quem foi o arquiteto do prédio?"
      ]
    }

  ]

  selectQuestion(value: string) {
    this.questionSelected.emit(value);
  }

}
