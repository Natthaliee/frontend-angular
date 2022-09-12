import { Component, OnInit } from '@angular/core';
import { GetEmpresasService } from 'src/app/get-empresas.service';

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {

  listEmpresas: any;
  constructor(private empresasService: GetEmpresasService) { }

  ngOnInit(): void {
    this.empresasService.getEmpresas().subscribe(data => {
      this.listEmpresas = data;
    });
  }

}