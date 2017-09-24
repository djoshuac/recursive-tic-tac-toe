import {Player} from './player.enum';

export class TicTacToeNode {
  victor: Player;
  subgames: Array<TicTacToeNode>;
  parent: TicTacToeNode;
  layer: number;

  constructor(layers: number, size: number, parent?: TicTacToeNode) {
    this.victor = Player.NoOne;
    this.subgames = [];
    this.layer = layers;
    this.parent = parent;

    if (layers > 0) {
      for (let i = 0; i < size; i++) {
        this.subgames.push(new TicTacToeNode(layers - 1, size, this));
      }
    }
  }

  getChildVictor(index): Player {
    return this.subgames[index].victor;
  }
}
