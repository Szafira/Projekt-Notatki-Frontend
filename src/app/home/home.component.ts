
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-warning is-fullheight is-bold">
  <div class="yellow">
    <div class="container has-text-centered">
      <p class="title">
        Witaj na stronie wymiany notatek!
      </p>
      <p class="subtitle">
        Nasza strona ma za zadanie pomóc Ci w Twojej nauce. <br> Aby zacząć musisz się zarejestrować, bądź zalogować.
      </p>
    </div>
  </div>
</section>`,
  styles: [`
    .hero {
      background-image: url("src/assets/img/glownejpg.jpg") !important;
      background-size: cover;
      background-position: center center;
    }
    .yellow {
      background-color: 	#669966;
    }
    

    
    
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
