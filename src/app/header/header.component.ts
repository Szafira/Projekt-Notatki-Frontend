import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar is-dark">
  <!-- NAGLOWEK -->
<div class="navbar-brand">
<a class="navbar-item">
    <img src="assets/img/ksiazki.jpg"> </a>

    <a class="navbar-item" routerLink="/home">
    Strona główna </a>
    <a class="navbar-item" routerLink="/TextEditor"> Dodaj Notatkę </a>
</div>
  <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" routerLink="/register">
              <strong> Zarejestruj się </strong>
          </a>
        <a class="button is-light" routerLink="/logging">
          Zaloguj się
        </a>
</div>

  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
