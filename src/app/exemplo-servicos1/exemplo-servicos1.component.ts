import { LoggerrService } from './../loggerr.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component {
  nome = "";

  constructor(private logger: LoggerrService){

  }

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }
}
