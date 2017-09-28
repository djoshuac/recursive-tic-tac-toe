import { Component, OnInit } from '@angular/core';
import {GameStorageService} from "../services/game-storage.service";
import {Game} from "../models/game.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  gameId: string;

  constructor(private gameStorageService: GameStorageService) {}

  ngOnInit() {
    this.gameId = this.gameStorageService.createTicTacToeInceptionGame();
  }
}
