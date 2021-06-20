import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-register',
  template: `
    <section class="hero is-link is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"> Zarejestruj się </h1>
        </div>
      </div>
    </section> 


    <section class="section">
      <div class="container">

        <form (ngSubmit)="Register()" #walidacjaForm="ngForm">

          <div class="field">
            <label class="label"> Utwórz login </label>
            <input 
            type="text" 
            name="login" 
            class="input" 
            [(ngModel)]="login"
            #loginInput="ngModel"
            minlength="5">
           </div>
                    <div class="help is-error" *ngIf="loginInput.errors?.minlength && loginInput.touched">
                    Twój login musi zawierać minimum 5 znaków </div>
        

           <div class="field">
           <label class="label"> Utwórz hasło </label>
           <input type="password" 
           name="haslo" 
           class="input" 
           [(ngModel)]="haslo"
           #hasloInput="ngModel"
           minlength="8">
          </div> 

                  <div class="help is-error" *ngIf="hasloInput.errors?.minlength && hasloInput.touched">
                  Twoje hasło musi się składać z minimum 8 znaków </div>

          <div class="field">
           <label class="label"> Podaj swój e-mail </label>
           <input type="email" 
           name="email" 
           class="input" 
           [(ngModel)]="email"
           #emailInput="ngModel"
           required
           email>

           <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
           E-mail jest wymagany, musi być poprawny. </div> 

          </div> 

          <button type="submit" 
          class="button is-large is-warning"
          [disabled]="walidacjaForm.invalid">
          Zarejestruj </button>

        </form>
      </div>
    </section>
  `
  ,
  styles: []
})

export class RegisterComponent implements OnInit {
  constructor(private service:SharedService) { }
  @Input() not:any;
  id_uzytkownika: string | undefined;
  login: string | undefined;
  haslo: string | undefined;
  email: string | undefined;

  ngOnInit(): void {
  }

  submitForm() {
    const wiadomosc = `Gratulacje, zostałeś zarejestrowany. 
    Twój login to ${this.login}.
    Zarejestrowano na adres mailowy: ${this.email}`
      alert(wiadomosc);
  }

  Register(){
    var val = {
                id_uzytkownika:this.id_uzytkownika,
                nazwa_uzytkownika:this.login,
                email:this.email,
                haslo:this.haslo
              };
    this.service.Register(val).subscribe(res=>{
      (res.toString());
});
  }
}
