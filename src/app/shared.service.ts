import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44339/";


  constructor(private http:HttpClient) { }
 
  GetNotatkaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/text-editor');
  }

  AddNotatka(val:any){
    return this.http.post<any>(this.APIUrl+'/notatka',val)
  }
}