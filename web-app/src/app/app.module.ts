import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

import { TicTacToeService } from './services/tic-tac-toe.service';
import { GameStorageService } from './services/game-storage.service';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TicTacToeService,
    GameStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
