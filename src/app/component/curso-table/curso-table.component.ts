import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/service/curso.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-curso-table',
  templateUrl: './curso-table.component.html',
  styleUrls: ['./curso-table.component.css']
})
export class CursoTableComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'descricao', 'dtFim', 'dtInicio', 'qtdAlunos', 'acoes'];
  dataSource: Curso[] = new Array();

  constructor(
    private router: Router,
    private cursoService: CursoService,
    private categoriaService: CategoriaService) { 
      
  }

  addNovo(){
    this.router.navigate(['curso/form']);
  }

  alterar(codCurso: number){
    this.router.navigate(['curso/form'], { queryParams: { codigo: codCurso} });
  }

  remover(codCurso: number){
    this.cursoService.delete(codCurso).subscribe((result) =>{
      alert("Sucesso!");
      window.location.reload();
    }, (error: HttpErrorResponse) => {
      console.error(error)
      if(error.error!=null)
        alert(error.error);
      else 
        alert(error.message);
    });
  }

  ngOnInit(): void {
    this.cursoService.findAll().subscribe((resp)=>{
      this.dataSource = resp;
    });
  }

}
