import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register/register.component';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44339/";


  constructor(private http:HttpClient) { }
 
  postRegister(form: RegisterComponent)
  {
    return this.http.post('http://localhost:44339/register', form);
  }

  getLogin(){}
 
  GetNotatkaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/text-editor');
  }

  AddNotatka(val:any){
    return this.http.post<JSON>(this.APIUrl+'notatka/post',val)
  }
}