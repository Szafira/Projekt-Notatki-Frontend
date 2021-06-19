import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html'
  ,
  styles: []
      })

export class TextEditorComponent implements OnInit {
  constructor(private service:SharedService) { }
  @Input() not:any;
  id_notatka: string | undefined;
  id_uzytkownik: string | undefined;
  tytul: string | undefined;
  klasa: string | undefined;
  przedmiot: string | undefined;
  tekst: string | undefined;

 

  ngOnInit(): void {
    this.id_notatka=this.id_notatka;
    this.id_uzytkownik=this.id_uzytkownik;
    this.tytul=this.tytul;
    this.klasa=this.klasa;
    this.przedmiot=this.przedmiot;
    this.tekst=this.tekst;
  }
  AddNotes(){
    var notatka = {id_notatka:this.id_notatka,
                id_uzytkownik:this.id_uzytkownik,
                tytul:this.tytul,
                klasa:this.klasa,
                przedmiot:this.przedmiot,
                tekst:this.tekst
              };
    this.service.AddNotes(notatka).subscribe(res=>{
      (res.toString());
    });
  }

}
