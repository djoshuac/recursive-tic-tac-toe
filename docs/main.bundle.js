webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-board>\n</app-board>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tic_tac_toe_tic_tac_toe_component__ = __webpack_require__("../../../../../src/app/tic-tac-toe/tic-tac-toe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tic_tac_toe_service__ = __webpack_require__("../../../../../src/app/services/tic-tac-toe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_game_storage_service__ = __webpack_require__("../../../../../src/app/services/game-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__board_board_component__ = __webpack_require__("../../../../../src/app/board/board.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__tic_tac_toe_tic_tac_toe_component__["a" /* TicTacToeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__board_board_component__["a" /* BoardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_tic_tac_toe_service__["a" /* TicTacToeService */],
            __WEBPACK_IMPORTED_MODULE_5__services_game_storage_service__["a" /* GameStorageService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Center the game on the screen*/\n#game\n{\n  width: 100%;\n  height: 20em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"game\">\n  <app-tic-tac-toe (gamid)=\"gameId\"></app-tic-tac-toe>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_storage_service__ = __webpack_require__("../../../../../src/app/services/game-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = (function () {
    function BoardComponent(gameStorageService) {
        this.gameStorageService = gameStorageService;
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.gameId = this.gameStorageService.createTicTacToeInceptionGame();
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-board',
        template: __webpack_require__("../../../../../src/app/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/board/board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_storage_service__["a" /* GameStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_storage_service__["a" /* GameStorageService */]) === "function" && _a || Object])
], BoardComponent);

var _a;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/game.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tic_tac_toe_node_models__ = __webpack_require__("../../../../../src/app/models/tic-tac-toe-node.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_enum__ = __webpack_require__("../../../../../src/app/models/player.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });


var Game = (function () {
    function Game() {
        this.nextMoveLocation = [];
        this.victor = __WEBPACK_IMPORTED_MODULE_1__player_enum__["a" /* Player */].NoOne;
        this.turn = __WEBPACK_IMPORTED_MODULE_1__player_enum__["a" /* Player */].First;
        this.ticTacToe = new __WEBPACK_IMPORTED_MODULE_0__tic_tac_toe_node_models__["a" /* TicTacToeNode */](2, 9);
        this.canMoveSubscribers = [];
    }
    Game.prototype.subscribeCanMove = function (subscription) {
        this.canMoveSubscribers.push(subscription);
    };
    return Game;
}());

//# sourceMappingURL=game.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/player.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player;
(function (Player) {
    Player[Player["NoOne"] = 0] = "NoOne";
    Player[Player["First"] = 1] = "First";
    Player[Player["Second"] = 2] = "Second";
    Player[Player["CatsEye"] = 3] = "CatsEye";
})(Player || (Player = {}));
//# sourceMappingURL=player.enum.js.map

/***/ }),

/***/ "../../../../../src/app/models/tic-tac-toe-node.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_enum__ = __webpack_require__("../../../../../src/app/models/player.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicTacToeNode; });

var TicTacToeNode = (function () {
    function TicTacToeNode(layers, size, parent) {
        this.victor = __WEBPACK_IMPORTED_MODULE_0__player_enum__["a" /* Player */].NoOne;
        this.subgames = [];
        this.layer = layers;
        this.parent = parent;
        if (layers > 0) {
            for (var i = 0; i < size; i++) {
                this.subgames.push(new TicTacToeNode(layers - 1, size, this));
            }
        }
    }
    TicTacToeNode.prototype.getChildVictor = function (index) {
        return this.subgames[index].victor;
    };
    return TicTacToeNode;
}());

//# sourceMappingURL=tic-tac-toe-node.models.js.map

/***/ }),

/***/ "../../../../../src/app/services/game-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_game_model__ = __webpack_require__("../../../../../src/app/models/game.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameStorageService = (function () {
    function GameStorageService() {
        this.games = {};
    }
    GameStorageService.prototype.getGame = function (id) {
        return this.games[id];
    };
    GameStorageService.prototype.createTicTacToeInceptionGame = function () {
        var count = 0;
        var ms = new Date().getUTCMilliseconds();
        var id;
        while (this.games[id] !== undefined) {
            id = "g" + ms + ":" + count;
            count += 1;
        }
        this.games[id] = new __WEBPACK_IMPORTED_MODULE_1__models_game_model__["a" /* Game */]();
        return id;
    };
    return GameStorageService;
}());
GameStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GameStorageService);

//# sourceMappingURL=game-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tic-tac-toe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_player_enum__ = __webpack_require__("../../../../../src/app/models/player.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicTacToeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicTacToeService = (function () {
    function TicTacToeService() {
        this.cells = [
            0, 1, 2, 3, 4, 5, 6, 7, 8
        ];
        this.layout = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ];
        this.waysToWin = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ];
    }
    TicTacToeService.prototype.testWayToWin = function (game, way) {
        var victor = game.getChildVictor(way[0]);
        for (var i = 1; i < way.length; i++) {
            var v = game.getChildVictor(way[i]);
            if (v === __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].NoOne || v !== victor) {
                return __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].NoOne;
            }
        }
        return victor;
    };
    TicTacToeService.prototype.testForVictor = function (game) {
        for (var i = 0; i < this.waysToWin.length; i++) {
            var way = this.waysToWin[i];
            var victor = this.testWayToWin(game, way);
            if (victor !== __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].NoOne) {
                return victor;
            }
        }
        for (var i = 0; i < this.cells.length; i++) {
            var e = this.cells[i];
            if (game.subgames[e].victor === __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].NoOne) {
                return __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].NoOne;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].CatsEye;
    };
    TicTacToeService.prototype.canMakeMove = function (game, location) {
        for (var i = 0; i < game.nextMoveLocation.length; i++) {
            if (game.nextMoveLocation[i] !== location[i]) {
                return false;
            }
        }
        return true;
    };
    TicTacToeService.prototype.followLocation = function (node, location) {
        for (var i = 0; i < location.length; i++) {
            node = node.subgames[location[i]];
        }
        return node;
    };
    TicTacToeService.prototype.makeMove = function (game, location) {
        if (!this.canMakeMove(game, location)) {
            console.log("NOPE!");
            return;
        }
        var node = this.followLocation(game.ticTacToe, location);
        var victor = game.turn;
        while (victor !== __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].NoOne && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(node)) {
            if (node.subgames.length > 0) {
                victor = this.testForVictor(node);
            }
            node.victor = victor;
            node = node.parent;
        }
        if (victor !== __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].NoOne) {
            game.victor = victor;
        }
        else {
            this.nextTurn(game, location);
        }
        console.log(game);
    };
    TicTacToeService.prototype.nextTurn = function (game, location) {
        var turn = game.turn === __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].First ? __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].Second : __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].First;
        var nextMoveLocation = location.slice(0);
        nextMoveLocation.shift();
        var node = this.followLocation(game.ticTacToe, nextMoveLocation);
        while (node.victor !== __WEBPACK_IMPORTED_MODULE_1__models_player_enum__["a" /* Player */].NoOne && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(node)) {
            nextMoveLocation.shift();
            node = node.parent;
        }
        game.nextMoveLocation = nextMoveLocation;
        game.turn = turn;
    };
    return TicTacToeService;
}());
TicTacToeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TicTacToeService);

//# sourceMappingURL=tic-tac-toe.service.js.map

/***/ }),

/***/ "../../../../../src/app/tic-tac-toe/tic-tac-toe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-layer2\n{\n  margin: auto;\n  max-width: 646px;\n  min-width: 646px;\n  height: 646px;\n}\n\n/*Put a margin around the minigames*/\n.game-layer1\n{\n  margin: 10px;\n  width: 192px;\n  min-width: 192px;\n  height: 192px;\n}\n\n/*bigger cells*/\n.layer2\n{\n  border: 5px solid rgb(50, 50, 50);\n  width: 100%;\n  min-width: 212px;\n  height: 212px;\n}\n\n/*Smaller cells*/\n.layer1\n{\n  border: 2px dashed darkgrey;\n  width: 100%;\n  min-width: 60px;\n  height: 60px;\n}\n\n/*This makes it so there are not duplicate borders.*/\ntable\n{\n  border-collapse: collapse;\n  text-align: center;\n  vertical-align: middle;\n}\n\nbutton\n{\n  width: 100%;\n  height: 100%;\n}\n\n/*Signify cell can be played in next*/\nbutton.canMove\n{\n  background-color: #BBCCFF;\n}\n\n/*Change the color of the smaller cells when mouse is over them.*/\nbutton.canMove:hover\n{\n  background-color: #ffebcd;\n}\n\n/*Change color of x won cells*/\nbutton.victor1\n{\n  background-color: red;\n}\n\n/*Change color of x won cells*/\nbutton.victor2\n{\n  background-color: yellow;\n}\n\n\n/*Erase the borders that are not needed.*/\ntd:first-of-type\n{\n  border-left: none;\n  border-top: none;\n}\n\ntd:nth-of-type(2)\n{\n  border-top: none;\n}\n\ntd:nth-of-type(3)\n{\n  border-right: none;\n  border-top: none;\n}\n\n/*The arrow is for a direct child relationship. I couldn't get it to work except by doing this.*/\ntr:nth-of-type(3) > td\n{\n  border-bottom: none;\n}\n\n.cell-button {\n  outline: none;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tic-tac-toe/tic-tac-toe.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"game.layer === 0 && game.victor === NoOne\">\n  <button class=\"cell-button\"\n          (click)=\"mark()\"\n          [ngClass]=\"{canMove: canMark()}\"\n          style=\"width:100%;height:100%\">\n    {{ getPlayerSymbol(game.victor) }}\n  </button>\n</ng-template>\n<ng-template [ngIf]=\"game.victor !== NoOne && game.victor !== CatsEye\">\n  <button class=\"cell-button\"\n          [ngClass]=\"'victor'+game.victor\"\n          style=\"width:100%;height:100%\">\n    {{ getPlayerSymbol(game.victor) }}\n  </button>\n</ng-template>\n<ng-template [ngIf]=\"game.layer > 0 && (game.victor === NoOne || game.victor === CatsEye)\">\n  <table [ngClass]=\"'game-layer'+game.layer\">\n    <tr *ngFor=\"let row of layout\">\n      <td [ngClass]=\"'layer'+game.layer\" *ngFor=\"let cell of row\">\n        <app-tic-tac-toe\n          [gameId]=\"this.gameId\"\n          [location]=\"this.location.concat([cell])\"\n          [game]=\"this.game.subgames[cell]\"\n        ></app-tic-tac-toe>\n      </td>\n    </tr>\n  </table>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/tic-tac-toe/tic-tac-toe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_storage_service__ = __webpack_require__("../../../../../src/app/services/game-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tic_tac_toe_service__ = __webpack_require__("../../../../../src/app/services/tic-tac-toe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_tic_tac_toe_node_models__ = __webpack_require__("../../../../../src/app/models/tic-tac-toe-node.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_player_enum__ = __webpack_require__("../../../../../src/app/models/player.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicTacToeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TicTacToeComponent = (function () {
    function TicTacToeComponent(gameStorageService, ticTacToeService) {
        var _this = this;
        this.gameStorageService = gameStorageService;
        this.ticTacToeService = ticTacToeService;
        this.layout = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ];
        this.NoOne = __WEBPACK_IMPORTED_MODULE_5__models_player_enum__["a" /* Player */].NoOne;
        this.CatsEye = __WEBPACK_IMPORTED_MODULE_5__models_player_enum__["a" /* Player */].CatsEye;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.gameId)) {
            this.gameId = gameStorageService.createTicTacToeInceptionGame();
            this.game = gameStorageService.getGame(this.gameId).ticTacToe;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.location)) {
            this.location = [];
        }
        this.canMove = true;
        this.gameStorageService.getGame(this.gameId).subscribeCanMove(function (canMove) {
            _this.canMove = canMove;
        });
    }
    TicTacToeComponent.prototype.ngOnInit = function () {
    };
    TicTacToeComponent.prototype.getPlayerSymbol = function (player) {
        var playerSymbolMap = {};
        playerSymbolMap[__WEBPACK_IMPORTED_MODULE_5__models_player_enum__["a" /* Player */].NoOne] = '-';
        playerSymbolMap[__WEBPACK_IMPORTED_MODULE_5__models_player_enum__["a" /* Player */].CatsEye] = '';
        playerSymbolMap[__WEBPACK_IMPORTED_MODULE_5__models_player_enum__["a" /* Player */].First] = 'X';
        playerSymbolMap[__WEBPACK_IMPORTED_MODULE_5__models_player_enum__["a" /* Player */].Second] = 'O';
        return playerSymbolMap[player];
    };
    TicTacToeComponent.prototype.mark = function () {
        this.ticTacToeService.makeMove(this.gameStorageService.getGame(this.gameId), this.location);
    };
    TicTacToeComponent.prototype.canMark = function () {
        return this.ticTacToeService.canMakeMove(this.gameStorageService.getGame(this.gameId), this.location);
    };
    return TicTacToeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TicTacToeComponent.prototype, "gameId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_tic_tac_toe_node_models__["a" /* TicTacToeNode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_tic_tac_toe_node_models__["a" /* TicTacToeNode */]) === "function" && _a || Object)
], TicTacToeComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TicTacToeComponent.prototype, "location", void 0);
TicTacToeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tic-tac-toe',
        template: __webpack_require__("../../../../../src/app/tic-tac-toe/tic-tac-toe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tic-tac-toe/tic-tac-toe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_storage_service__["a" /* GameStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_storage_service__["a" /* GameStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_tic_tac_toe_service__["a" /* TicTacToeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tic_tac_toe_service__["a" /* TicTacToeService */]) === "function" && _c || Object])
], TicTacToeComponent);

var _a, _b, _c;
//# sourceMappingURL=tic-tac-toe.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map