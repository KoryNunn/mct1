"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
index_1.createGame({
    log: console.log,
    effects: function (name) { return name; },
    getName: function () { return 'default'; },
    onTick: function (gameState) {
    }
});
