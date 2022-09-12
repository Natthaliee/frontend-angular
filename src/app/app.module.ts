import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { EmpresasModule } from './empresas/empresas.module';
import { ListEmpresasComponent } from './empresas/list-empresas/list-empresas.component';
import { ViewEmpresaComponent } from './empresas/view-empresa/view-empresa.component';
import { AddEmpresaComponent } from './empresas/add-empresa/add-empresa.component';
import { EditEmpresaComponent } from './empresas/edit-empresa/edit-empresa.component';
import { DeleteEmpresaComponent } from './empresas/delete-empresa/delete-empresa.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    EmpresasModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
