import { TestBed } from '@angular/core/testing';

import { GetEmpresasService } from './get-empresas.service';

describe('GetEmpresasService', () => {
  let service: GetEmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
