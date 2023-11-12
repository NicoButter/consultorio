import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  email: string = '';
  password: string = '';

  login() {
    // Aquí puedes agregar la lógica de autenticación
    console.log('Username:', this.email);
    console.log('Password:', this.password);
    // Puedes redirigir al usuario a otra página después de iniciar sesión
  }

}