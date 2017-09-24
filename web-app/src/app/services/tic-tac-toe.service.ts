import { Injectable } from '@angular/core';

import { TicTacToeNode } from '../models/tic-tac-toe-node.models';
import { Player } from '../models/player.enum';
import {Game} from "../models/game.model";
import {isNullOrUndefined} from "util";


@Injectable()
export class TicTacToeService {
  cells: Array<number> = [
    0, 1, 2, 3, 4, 5, 6, 7, 8
  ];

  layout: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  waysToWin: Array<Array<number>> = [
    [0, 1, 2], // horizontal wins
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // vertical wins
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], // diagonal wins
    [6, 4, 2]
  ];

  constructor() {}

  testWayToWin(game: TicTacToeNode, way): Player {
    const victor = game.getChildVictor(way[0]);

    for (let i  = 1; i < way.length; i++) {
      const v = game.getChildVictor(way[i]);
      if (v === Player.NoOne || v !== victor) {
        return Player.NoOne;
      }
    }

    return victor;
  }

  testForVictor(game: TicTacToeNode): Player {
    for (let i = 0; i < this.waysToWin.length; i++) {
      const way = this.waysToWin[i];

      const victor = this.testWayToWin(game, way);

      if (victor !== Player.NoOne) {
        return victor;
      }
    }

    return Player.NoOne;
  }

  canMakeMove(game: Game, location: Array<Number>) {
    for (let i = 0; i < game.nextMoveLocation.length; i++) {
      if (game.nextMoveLocation[i] !== location[i]) {
        return false;
      }
    }
    return true;
  }

  followLocation(node: TicTacToeNode, location: Array<number>): TicTacToeNode {
    for (let i = 0; i < location.length; i++) {
      node = node.subgames[location[i]];
    }
    return node;
  }


  makeMove(game: Game, location: Array<number>) {
    if (!this.canMakeMove(game, location)) {
      console.log("NOPE!");
      return;
    }

    let node = this.followLocation(game.ticTacToe, location);
    let victor = game.turn;

    while (victor !== Player.NoOne && !isNullOrUndefined(node)) {
      if (node.subgames.length > 0) {
        victor = this.testForVictor(node);
      }
      node.victor = victor;
      node = node.parent;
    }

    if (victor !== Player.NoOne) {
      game.victor = victor;
    }
    else {
      this.nextTurn(game, location);
    }

    console.log(game);
  }

  nextTurn(game: Game, location: Array<number>) {
    const turn = game.turn === Player.First ? Player.Second : Player.First;
    const nextMoveLocation = location.slice(0);

    nextMoveLocation.shift();
    let node = this.followLocation(game.ticTacToe, nextMoveLocation);

    while (node.victor !== Player.NoOne && !isNullOrUndefined(node)) {
      nextMoveLocation.shift();
      node = node.parent;
    }

    game.nextMoveLocation = nextMoveLocation;
    game.turn = turn;
  }

  // #next make cells show which ones you can play in
}
