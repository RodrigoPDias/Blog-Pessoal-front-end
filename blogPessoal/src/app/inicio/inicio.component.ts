import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
   /*if(environment.token == ''){
      alert ('Sessão expirou')
      this.router.navigate(['/entrar'])
    }*/

  }
  verPostagens(){
    let x = document.querySelector("#postagens")
    if(x){
      x.scrollIntoView()
      console.log("estouAqui")
    }
  }

}
