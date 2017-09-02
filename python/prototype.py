from collections import namedtuple
from random import randint

### Index of each small game ###
#  7  8  9      tl tm tr
#  4  5  6  =>  ml mm mr
#  1  2  3      bl bm br
# 0th is who has won the box

### Players ###
# 1 is player 1
# 2 is player 2
# 0 is noone

class Board:
    def __init__(self, size):
        self.size = size
        self.board = [[0] * (size + 1) for _ in range(size + 1)]

    def set_cell(self, box, spot, player):
        self.board[box][spot] = player

    def __str__(self):
        return "\n".join(map(str, self.board))

class Turn:
    def __init__(self, box, player):
        self.box = box
        self.player = player

    def next_turn(self):
        x = self.player
        self.player = x + 1 if x == 1 else 1

class Game:
    def __init__(self):
        self.board = Board(9)
        self.turn = Turn(-1, 1)

    def make_move(self, player, box, spot):
        if not self.is_legal_move(player, box, spot):
            return False
        else:
            self.board[box][spot] = player
            return True

    def box_is_legal(self, box):
        return box == -1 and box > 0 and box <= self.board.size or box == self.turn.box

    def spot_is_legal(self, box, spot):
        return self.board[box][spot] == 0

    def player_is_legal(self, player):
        return self.turn.player = player

    def is_legal_move(self, player, box, spot):
        if not self.box_is_legal(self, box):
            return False
        if not self.spot_is_legal(self, box, spot):
            return False
        if not self.player_is_legal(self, player):
            return False
        return True

class Random_AI:
    def __init__(self, rand_int):
        self.__rand_int = rand_int

    def pick_move(game):
        player = game.turn.
        box = -1
        spot = -1
        while not is_legal_move(player, box, spot)

board = Board(9)
turn = Turn(-1, 1)
