import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44339/";


  constructor(private http:HttpClient) { }
 
  Register(val:any){
    return this.http.post<any>(this.APIUrl+'api/uzytkownik',val)
  }

  Login():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/uzytkownik');
  }
 
  GetNotesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/notes');
  }

  GetNote(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/notes/'+val);
  }

  EditNote(val:any, id:any){
    return this.http.put<any>(this.APIUrl+'api/notes/'+id,val);
  }

  AddNotes(val:any){
    return this.http.post<any>(this.APIUrl+'api/notes',val)
  }
}