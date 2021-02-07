import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}categoria/`;
  }

  public findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.url}listar/todos`);
  }

  public findByCodigo(codCategoria: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.url}buscar/${codCategoria}`);
  }

  public save(categoria: Categoria) {
    return this.http.post(`${this.url}registrar`, categoria);
  }

  public update(categoria: Categoria) {
    return this.http.put(`${this.url}atualizar`, categoria);
  }

  public delete(codCategoria: number) {
    return this.http.delete(`${this.url}remover/${codCategoria}`);
  }
}
