import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmaSenha: string
  tipoUsuario:string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
   window.scroll(0,0)
  }

  confirmeSenha(event:any){
    this.confirmaSenha = event.target.value
  }
  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }
  cadastrarFinal(){

    this.user.tipo = this.tipoUsuario


   console.log(this.user)


    if(this.user.senha != this.confirmaSenha){
      alert ('A senhas estão incorretas')
    }else{
      this.auth.cadastrar(this.user).subscribe((resp:User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso')
      })
    }
  }
}
