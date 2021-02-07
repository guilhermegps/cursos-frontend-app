import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CursoService } from 'src/app/service/curso.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/model/categoria';
import { Curso } from 'src/app/model/curso';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class CursoFormComponent {
  @Input() curso: Curso;

  cursoForm = this.fb.group({
    qtdAlunos: [null],
    descricao: [null, Validators.required],
    categoria: [null, Validators.required],
    dtInicio: [null, Validators.required],
    dtFim: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(5)])
    ]
  });

  hasUnitNumber = false;

  categorias: Categoria[] = new Array();

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private categoriaService: CategoriaService
  ) {
    this.curso = new Curso();
  }

  ngOnInit() {
    this.categoriaService.findAll().subscribe((resp)=>{
      this.categorias = resp;
    });
  }

  onSubmit() {
    this.cursoService.save(this.curso).subscribe((result) =>{
      alert("Sucesso!");
    }, (error: HttpErrorResponse) => {
      console.error(error)
      if(error.error!=null)
        alert(error.error);
      else 
        alert(error.message);
    });
  }
}
