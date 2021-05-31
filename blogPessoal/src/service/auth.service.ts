import { UserLogin } from './../app/model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  entrar(userLogin:UserLogin): Observable<UserLogin>{
return this.http.post<UserLogin>('https://blogpessoalrpd.herokuapp.com/usuarios/logar',userLogin)
  }
  cadastrar(user:User): Observable<User>{
    return this.http.post<User>('https://blogpessoalrpd.herokuapp.com/usuarios/cadastrar',user)
  }
}
