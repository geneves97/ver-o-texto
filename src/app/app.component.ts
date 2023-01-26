import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Escrever', url: '/folder/Escrever', icon: 'pencil' },
    { title: 'Ler', url: '/folder/Ler', icon: 'book' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Atividades', url: '/folder/Atividades', icon: 'archive' },
    { title: 'lixo', url: '/folder/lixo', icon: 'trash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
