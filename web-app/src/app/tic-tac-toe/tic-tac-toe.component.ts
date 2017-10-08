import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { GameStorageService } from "../services/game-storage.service";
import { TicTacToeService } from "../services/tic-tac-toe.service";

import { TicTacToeNode } from '../models/tic-tac-toe-node.models';
import { isNullOrUndefined } from "util";
import { Player } from "../models/player.enum";

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  @Input() gameId: string;
  @Input() game: TicTacToeNode;
  @Input() location: Array<number>;

  layout = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  Player = Player;

  canMove: boolean;

  constructor(private gameStorageService: GameStorageService,
              private ticTacToeService: TicTacToeService) {
    if (isNullOrUndefined(this.gameId)) {
      this.gameId = gameStorageService.createTicTacToeInceptionGame();
      this.game = gameStorageService.getGame(this.gameId).ticTacToe;
    }
    if (isNullOrUndefined(this.location)) {
      this.location = [];
    }

    this.canMove = true;
    this.gameStorageService.getGame(this.gameId).subscribeCanMove(canMove => {
      this.canMove = canMove;
    });
  }

  ngOnInit() {
  }

  getPlayerSymbol(player: Player): string {
    const playerSymbolMap = {};
    playerSymbolMap[Player.NoOne] = '-';
    playerSymbolMap[Player.CatsEye] = '';
    playerSymbolMap[Player.First] = 'X';
    playerSymbolMap[Player.Second] = 'O';

    return playerSymbolMap[player];
  }

  mark() {
    this.ticTacToeService.makeMove(this.gameStorageService.getGame(this.gameId), this.location);
  }

  canMark(): boolean {
    return this.ticTacToeService.canMakeMove(this.gameStorageService.getGame(this.gameId), this.location);
  }
}
