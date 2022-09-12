import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmpresasComponent } from './list-empresas/list-empresas.component';
import { ViewEmpresaComponent } from './view-empresa/view-empresa.component';
import { AddEmpresaComponent } from './add-empresa/add-empresa.component';
import { EditEmpresaComponent } from './edit-empresa/edit-empresa.component';
import { DeleteEmpresaComponent } from './delete-empresa/delete-empresa.component';



@NgModule({
  declarations: [
    ListEmpresasComponent,
    ViewEmpresaComponent,
    AddEmpresaComponent,
    EditEmpresaComponent,
    DeleteEmpresaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpresasModule { }
