import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0);

  constructor(private _vagaService: VagasService) { }

  ngOnInit(): void {
  }

  atualizar() {
    var id = localStorage.getItem('id')
    this._vagaService.atualizarVagas(id, this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0, "", "", "", 0)},
      err => {console.log("erro ao cadastrar")}
    );
      alert("VAGA ATUALIZADA");
      localStorage.removeItem('id');
      localStorage.clear();
      
      window.location.href = "/mural";
  }

}
