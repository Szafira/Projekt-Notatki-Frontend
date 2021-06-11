import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging',
  template:`
  <section class="hero is-link is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title"> Zaloguj się </h1>
    </div>
  </div>
</section> 

<section class="section">
      <div class="container">

        <form (ngSubmit)="submitForm()" #walidacjaForm="ngForm">

  <div class="field">
            <label class="label"> Login: </label>
            <input 
            type="text" 
            name="login" 
            class="input" 
            [(ngModel)]="login"
            #loginInput="ngModel"
            minlength="5"
            required>
           </div>

           <div class="help is-error" *ngIf="loginInput.errors?.minlength && loginInput.touched">
                    Twój login nie jest prawidłowy! </div>

          <div class="field">
           <label class="label"> Hasło: </label>
           <input type="password" 
           name="haslo" 
           class="input" 
           [(ngModel)]="haslo"
           #hasloInput="ngModel"
           minlength="8"
           required>

           <div class="help is-error" *ngIf="hasloInput.errors?.minlength && hasloInput.touched">
                  Wprowadź poprawne hasło! </div>
          </div> 

          <button type="submit" 
          class="button is-large is-warning"
          [disabled]="walidacjaForm.invalid">
          Zaloguj </button>
    </form>
  </div>
  </section>
  `,
  styles: []
})
export class LoggingComponent implements OnInit {
  login: string | undefined;
  haslo: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const wiadomosc = `Witaj ${this.login} ponownie!`
    alert(wiadomosc);
  }

}
