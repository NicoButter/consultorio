import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100%;
      background-image: url('/assets/login-background.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  `]
})
export class AppComponent {
  title = 'consultorio';
}
