import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable()
export class GameStorageService {
  games: {
    [details: string]: Game
  };

  constructor() {
    this.games = {};
  }

  getGame(id: string) {
    return this.games[id];
  }

  createTicTacToeInceptionGame(): string {
    let count = 0;
    const ms = new Date().getUTCMilliseconds();
    let id;

    while (this.games[id] !== undefined) {
      id = "g" + ms + ":" + count;
      count += 1;
    }

    this.games[id] = new Game();

    return id;
  }
}
