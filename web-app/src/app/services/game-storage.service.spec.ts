import { TestBed, inject } from '@angular/core/testing';

import { GameStorageService } from './game-storage.service';

describe('GameStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStorageService]
    });
  });

  it('should be created', inject([GameStorageService], (service: GameStorageService) => {
    expect(service).toBeTruthy();
  }));
});
