import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CursoService } from 'src/app/service/curso.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class CursoFormComponent {
  cursoForm = this.fb.group({
    descricao: [null, Validators.required],
    categoria: [null, Validators.required],
    dataInicio: [null, Validators.required],
    dataFim: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(5)])
    ]
  });

  hasUnitNumber = false;

  categorias: Categoria[] = new Array();

  ngOnInit() {
    this.categoriaService.findAll().subscribe((resp)=>{
      this.categorias = resp;
    });
  }

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private categoriaService: CategoriaService
  ) {}

  onSubmit() {
    alert('Obrigado!');
  }
}
