import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';
import Swal from 'sweetalert2'

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

    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não será capaz de reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Excluído!',
          'Seu arquivo foi excluído.',
          'success'
        ).then(() => {
          this._vagaService.removeVagas(id).subscribe(
          vaga => {this.vaga = new Vaga(0, "", "", "", 0)},
          err => {console.log("erro ao excluir")}
          );
          window.location.href = "/mural";
        })
      }
    })
  }

  atualizar(id: Number) {
    localStorage.setItem('id',`${id}`);
    window.location.href = "/painel";
  }

}
