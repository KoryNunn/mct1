"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var effects_1 = require("./Effects/effects");
index_1.createGame({
    log: magikcraft.io.dixit.bind(magikcraft.io),
    effects: effects_1.effects,
    getName: function () { return magikcraft.io.getSender().getName(); },
    onTick: function (gameState) {
    }
});
