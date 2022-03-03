import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-cadastrar-vagas',
  templateUrl: './cadastrar-vagas.component.html',
  styleUrls: ['./cadastrar-vagas.component.css']
})
export class CadastrarVagasComponent implements OnInit {

  public vagas: Vaga[] = [];
  public vaga: Vaga = new Vaga(0, "", "", "", 0);

  constructor(private _vagaService: VagasService) { }

  ngOnInit(): void {
  }
  cadastrar(){
    console.log(this.vaga);
    this._vagaService.cadastrarVagas(this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0, "", "", "", 0)},
      err => {console.log("erro ao cadastrar")}
    );
    alert('sucesso');
    window.location.href = "/mural"
  }

}
