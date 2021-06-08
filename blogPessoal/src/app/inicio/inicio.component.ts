import { User } from './../model/User';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens : Postagem[]

  tema: Tema = new Tema()
  listaTema: Tema[]
  idtema: number

  user:User = new User()
  idUser = environment.id

  constructor(
    private router : Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth:AuthService
  ) { }

  ngOnInit() {
   if(environment.token == ''){
      alert ('Sessão expirou')
      this.router.navigate(['/entrar'])
    }
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })

  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idtema).subscribe((resp: Tema)=>{
      this.tema =resp
    })
  }
  findByUser(){
    this.auth.getByIdUSer(this.idUser).subscribe((resp:User)=>{
      this.user =resp
    })
  }

  publicar(){
    this.tema.id =this.idtema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postado com sucesso!')
      console.log("estouAqui")
      this.getAllPostagens()
    })
  }

  verPostagens(){
    let x = document.querySelector("#postagens")
    if(x){
      x.scrollIntoView()
      console.log("estouAqui")
    }
  }

}
