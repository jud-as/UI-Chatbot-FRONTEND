import { Component } from '@angular/core';
import {SparkleComponent} from '../../../icons/sparkle/sparkle.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    SparkleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  openChat() {
    this.router.navigate(['/chat']);
  }
}
