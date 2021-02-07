import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoFormComponent } from './component/curso-form/curso-form.component';
import { CursoTableComponent } from './component/curso-table/curso-table.component';

const routes: Routes = [
  {
    path: '',
    component: CursoTableComponent
  },
  {
    path: 'curso/form',
    component: CursoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
