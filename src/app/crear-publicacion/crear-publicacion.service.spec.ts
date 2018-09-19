import { TestBed, inject } from '@angular/core/testing';

import { CrearPublicacionService } from './crear-publicacion.service';

describe('CrearPublicacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearPublicacionService]
    });
  });

  it('should ...', inject([CrearPublicacionService], (service: CrearPublicacionService) => {
    expect(service).toBeTruthy();
  }));
});
