import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/service/curso.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-table',
  templateUrl: './curso-table.component.html',
  styleUrls: ['./curso-table.component.css']
})
export class CursoTableComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'descricao', 'dtFim', 'dtInicio', 'qtdAlunos'];
  dataSource: Curso[] = new Array();

  constructor(
    private router: Router,
    private cursoService: CursoService,
    private categoriaService: CategoriaService) { 
      
  }

  addNovo(){
    this.router.navigate(['curso/form']);
  }

  ngOnInit(): void {
    this.cursoService.findAll().subscribe((resp)=>{
      this.dataSource = resp;
    });
  }

}
