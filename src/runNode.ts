import { createGame } from './index';
import { effects } from './Effects/effects';

createGame({
    log: console.log,
    effects: name => name,
    getName: () => 'default',
    getState: () => ({}),
    onTick: function(gameState){

    }
});