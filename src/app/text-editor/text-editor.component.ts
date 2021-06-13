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
    this.id_notatka=this.not.id_notatka;
    this.id_uzytkownik=this.not.id_uzytkownik;
    this.tytul=this.not.tytul;
    this.klasa=this.not.klasa;
    this.przedmiot=this.not.przedmiot;
    this.tekst=this.not.tekst;
  }
  AddNotatka(){
    var val = {id_notatka:this.id_notatka,
                id_uzytkownik:this.id_uzytkownik,
                tytul:this.tytul,
                klasa:this.klasa,
                przedmiot:this.przedmiot,
                tekst:this.tekst
              };
    this.service.AddNotatka(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
