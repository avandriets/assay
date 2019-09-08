import { TestBed } from '@angular/core/testing';

import { ModelsDataService } from './models-data.service';

describe('ModelsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelsDataService = TestBed.get(ModelsDataService);
    expect(service).toBeTruthy();
  });
});
