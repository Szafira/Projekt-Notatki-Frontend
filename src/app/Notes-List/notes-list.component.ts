import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html'
  ,
  styles: []
      })

export class NotesListComponent implements OnInit {
  constructor(private service:SharedService) { }
  @Input() not:any;
  notatka: any = []
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
  GetNotesList(){
    var notatka = {id_notatka:this.id_notatka,
                id_uzytkownik:this.id_uzytkownik,
                tytul:this.tytul,
                klasa:this.klasa,
                przedmiot:this.przedmiot,
                tekst:this.tekst
              };
    this.service.GetNotesList().subscribe((res)=>{
      this.notatka = res
    });
  }
  GetNote(){
    var notatka = {id_notatka:this.id_notatka,
                id_uzytkownik:this.id_uzytkownik,
                tytul:this.tytul,
                klasa:this.klasa,
                przedmiot:this.przedmiot,
                tekst:this.tekst
              };
    this.service.GetNote(this.id_notatka).subscribe((res)=>{
      this.notatka = res
    });
  }
}

export class NotesList{
private notatka: any = []
}