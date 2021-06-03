import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert ('Sessão expirou')
      this.router.navigate(['/entrar'])
    }
  }
  verPostagens(){
    let x = document.querySelector("#postagens")
    if(x){
      x.scrollIntoView()
      console.log("estouAqui")
    }
  }
  todasPostagens(){
    let x = document.querySelector("#todasPostagens")
    if(x){
      x.scrollIntoView()
      console.log("estouAqui")
    }
  }
  minhasPostagens(){
    let x = document.querySelector("#minhasPostagens")
    if(x){
      x.scrollIntoView()
      console.log("estouAqui")
    }
  }
  temaPostagens(){
    let x = document.querySelector("#temaPostagens")
    if(x){
      x.scrollIntoView()
      console.log("estouAqui")
    }
  }

}
