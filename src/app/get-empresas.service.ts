import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetEmpresasService {

  constructor(private http:HttpClient) { }
  
  getEmpresas()
  {
    const httpHeaders = new HttpHeaders({
      'content-type':'aplication/json',
      'user':'User123',
      'password':'Password123'
    });

    let url="https://apitest-bt.herokuapp.com/api/v1/empresas/";
    return this.http.get(url, {headers: httpHeaders});
  }
}
