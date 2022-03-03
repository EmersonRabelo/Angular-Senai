import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './models/Vagas.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient) { }

  getVagas(): Observable<Vaga[]> {
    return this._httpClient.get<Vaga[]>(this.url);
  }

  cadastrarVagas(vaga: Vaga): Observable<Vaga[]> {
    return this._httpClient.post<Vaga[]>(this.url, vaga)
  }

  atualizarVagas(id: any, vaga: Vaga): Observable<Vaga[]>{ 
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Vaga[]>(urlAtualizar, vaga);
  }

  removeVagas(id:any): Observable<Vaga[]>{
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Vaga[]>(urlDeletar);
  }

}
