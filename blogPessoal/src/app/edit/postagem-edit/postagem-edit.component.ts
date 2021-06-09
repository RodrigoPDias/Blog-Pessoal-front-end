import { TemaService } from './../../service/tema.service';
import { PostagemService } from './../../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from './../../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from 'src/app/model/Tema';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem : Postagem = new Postagem()

  tema : Tema = new Tema()
  listaTema: Tema[]
  idTema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
    if(environment.token == ''){
      alert ('Sessão expirou')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findByIdTema()
  }

  findByIdPostagem(id: number){
    this.postagemService.getByPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema =resp
    })
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTema = resp
    })
  }


  atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp:Postagem)=>{
      this.postagem = resp
      alert('Postagem atualizada!')
      this.router.navigate(['/inicio'])
    })
  }
}
