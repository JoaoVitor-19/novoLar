import { TestBed } from '@angular/core/testing';

import { ServiceAnimais } from './service-animais';

describe('ServiceAnimais', () => {
  let service: ServiceAnimais;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAnimais);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
