import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { CadastrarVagasComponent } from '../cadastrar-vagas/cadastrar-vagas.component';

const rotas: Routes = [
    {path: 'mural', component: MuralVagasComponent},
    {path: 'painel', component: PainelVagasComponent},
    {path: 'cadastrar', component: CadastrarVagasComponent},
    {path: '', redirectTo: '/mural', pathMatch: 'full'} // Caso não seja escolhi nenhuma das opções acima, sera direcionado a mural
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
