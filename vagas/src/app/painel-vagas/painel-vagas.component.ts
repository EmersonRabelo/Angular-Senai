import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';
import Swal from 'sweetalert2'

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

 const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
Toast.fire({
  icon: 'success',
  title: 'Signed in successfully'
}).then(()=> location.href = "/mural")

      localStorage.removeItem('id');
      localStorage.clear();
  }

}
