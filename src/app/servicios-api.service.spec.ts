import { TestBed } from '@angular/core/testing';

import { ServiciosAPIService } from './servicios-api.service';

describe('ServiciosAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosAPIService = TestBed.get(ServiciosAPIService);
    expect(service).toBeTruthy();
  });
});
