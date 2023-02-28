import { LoggerrService } from './../loggerr.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {
  descricao = "";

  constructor(public logger: LoggerrService){}

  adicionarProduto(){
    this.logger.logar(`O produto com a descricao ${this.descricao} foi adicionado`)
  }
}
