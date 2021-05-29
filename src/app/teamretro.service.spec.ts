import { TestBed } from '@angular/core/testing';

import { TeamretroService } from './teamretro.service';

describe('TeamretroService', () => {
  let service: TeamretroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamretroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
