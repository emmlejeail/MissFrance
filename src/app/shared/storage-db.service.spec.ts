import { TestBed } from '@angular/core/testing';

import { StorageDBService } from './storage-db.service';

describe('StorageDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageDBService = TestBed.get(StorageDBService);
    expect(service).toBeTruthy();
  });
});
