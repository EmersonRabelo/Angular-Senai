import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];
  public vaga: Vaga = new Vaga(0, "", "", "", 0);


  constructor(private _vagaService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagaService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
            item  => {return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );}
          )
        }
      )
  }

  excluir(id: Number) {
    this._vagaService.removeVagas(id).subscribe(
      vaga => {this.vaga = new Vaga(0, "", "", "", 0)},
      err => {console.log("erro ao excluir")}
    );

    window.location.href = "/mural";

  }

}
