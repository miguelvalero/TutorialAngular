import { TestBed } from '@angular/core/testing';

import { ServiciosListaService } from './servicios-lista.service';

describe('ServiciosListaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosListaService = TestBed.get(ServiciosListaService);
    expect(service).toBeTruthy();
  });
});
