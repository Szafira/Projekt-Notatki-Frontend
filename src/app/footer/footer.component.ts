import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`
  <!-- STOPKA -->
  <footer class="footer">
    <div class="container content has-text-centered">
      <p> Stworzone przez Klaudię Sawicką, Julię Siemaszko, Szymona Pusza </p>
    </div>

    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
