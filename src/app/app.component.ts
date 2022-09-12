import { Component, OnInit } from '@angular/core';
import {GetEmpresasService} from './get-empresas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bantrab-empresas';

  /*constructor(private empresa:GetEmpresasService)
  {
    this.empresa.getEmpresas().subscribe(data=>{
      console.warn(data);
    });
  }*/
  listEmpresas: any;
  constructor(private empresasService: GetEmpresasService) { }
  
  ngOnInit(): void {
    this.empresasService.getEmpresas().subscribe(data => {
      this.listEmpresas = data;
    });
  }
}

