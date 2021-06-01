import { UserLogin } from './../app/model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  entrar(userLogin:UserLogin): Observable<UserLogin>{
return this.http.post<UserLogin>(`${environment.server}/usuarios/logar`,userLogin)
  }
  cadastrar(user:User): Observable<User>{
    return this.http.post<User>(`${environment.server}/usuarios/cadastrar`,user)
  }
}
