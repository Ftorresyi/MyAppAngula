import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName = 'Diogo'
  userData = {
    email: 'diogorjbr@gmail.com',
    role: 'Dev Pleno'
  }
  title = 'MyfirstappAngula';
}
