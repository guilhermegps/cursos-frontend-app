import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../model/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}curso/`;
  }

  public findAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.url}listar/todos`);
  }

  public findByCodigo(codCurso: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.url}buscar/${codCurso}`);
  }

  public listForDescricao(descricao: string): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.url}listar/porDescricao/${descricao}`);
  }

  public save(curso: Curso) {
    if(curso.codigo==null)
      return this.http.post(`${this.url}registrar`, curso);
    else
      return this.http.put(`${this.url}atualizar`, curso);
  }

  public delete(codCurso: number) {
    return this.http.delete(`${this.url}remover/${codCurso}`);
  }
}
