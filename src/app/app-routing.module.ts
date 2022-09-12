import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpresaComponent } from './empresas/add-empresa/add-empresa.component';
import { DeleteEmpresaComponent } from './empresas/delete-empresa/delete-empresa.component';
import { EditEmpresaComponent } from './empresas/edit-empresa/edit-empresa.component';
import { ListEmpresasComponent } from './empresas/list-empresas/list-empresas.component';
import { ViewEmpresaComponent } from './empresas/view-empresa/view-empresa.component';

const routes: Routes = [
  {path:'create', component: AddEmpresaComponent},
  {path:'list', 
    children: [
      {path:'', component: ListEmpresasComponent},
      {path:'delete/:id', component: DeleteEmpresaComponent},
      {path:'edit/:id', component: EditEmpresaComponent},
      {path:'view/:id', component: ViewEmpresaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
