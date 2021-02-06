import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

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

  categorias = [
    {descricao: 'Comportamental', codigo: 1},
    {descricao: 'Programação', codigo: 2},
    {descricao: 'Qualidade', codigo: 3},
    {descricao: 'Processos', codigo: 4}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Obrigado!');
  }
}
