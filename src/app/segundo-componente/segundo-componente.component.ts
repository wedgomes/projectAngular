import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNacimento = "1995-01-01";
  urlImagem = "/assets/joao.png";

  mostrarDataNascimento(){
    alert(`A data de nascimento do João é: ${this.dataNacimento}`);
  }
}
