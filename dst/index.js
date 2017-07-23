"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BGLBarGlucoseMonitor_1 = require("./GlucoseMonitor/BGLBarGlucoseMonitor/BGLBarGlucoseMonitor");
var mct1_1 = require("./util/mct1");
var T1Player_1 = require("./Player/T1Player");
function createGame(environment) {
    mct1_1.mct1.version = '1.3.0';
    environment.log("MCT1 version " + mct1_1.mct1.version);
    function tick(game) {
        if (!game.running) {
            return;
        }
        environment.onTick(game);
    }
    function _default() {
        if (!mct1_1.mct1.initialised) {
            initialise();
        }
        setInterval(tick.bind(null, mct1_1.mct1));
    }
    function query() {
        environment.log("BGL: " + mct1_1.mct1.T1Player.BGL.getBGL);
    }
    function initialise(callback) {
        environment.log('Initialising...');
        var player = new T1Player_1.T1Player(environment);
        mct1_1.mct1.BGLBar = new BGLBarGlucoseMonitor_1.BGLBarGlucoseMonitor(environment, player, 1000);
        mct1_1.mct1.T1Player = player;
        mct1_1.mct1.initialised = true;
        mct1_1.mct1.running = false;
        callback && callback();
    }
    /**
     * MGK-006-compliant interface
     * See: https://github.com/Magikcraft/product-board/issues/6
     */
    return {
        _default: _default,
        query: query
    };
}
exports.createGame = createGame;
