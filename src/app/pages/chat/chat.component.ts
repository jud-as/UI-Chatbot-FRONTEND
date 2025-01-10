import { Component } from '@angular/core';
import {ArrowLeftComponent} from '../../../icons/arrow-left/arrow-left.component';
import {ElipseComponent} from '../../../icons/elipse/elipse.component';
import {MapMuseumComponent} from '../../../icons/map-museum/map-museum.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [
    ArrowLeftComponent,
    ElipseComponent,
    MapMuseumComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  constructor(private router: Router) {
  }

  openHome() {
    this.router.navigate(['/']);
  }
}
