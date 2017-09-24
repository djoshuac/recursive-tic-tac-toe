import { TestBed, inject } from '@angular/core/testing';

import { TicTacToeService } from './tic-tac-toe.service';

describe('TicTacToeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicTacToeService]
    });
  });

  it('should be created', inject([TicTacToeService], (service: TicTacToeService) => {
    expect(service).toBeTruthy();
  }));
});
