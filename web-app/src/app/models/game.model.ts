import { TicTacToeNode } from './tic-tac-toe-node.models';
import { Player } from './player.enum';

export class Game {
  turn: Player;
  ticTacToe: TicTacToeNode;
  victor: Player;
  nextMoveLocation: Array<number>;
  canMoveSubscribers: Array<{(canMove: boolean)}>;

  constructor() {
    this.nextMoveLocation = [];
    this.victor = Player.NoOne;
    this.turn = Player.First;
    this.ticTacToe = new TicTacToeNode(3, 9);
    this.canMoveSubscribers = [];
  }

  subscribeCanMove(subscription: {(canMove: boolean)}) {
    this.canMoveSubscribers.push(subscription);
  }
}
