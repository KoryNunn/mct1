import { createGame } from './index';
import { effects } from './Effects/effects';
import { BGLBarGlucoseMonitor } from './GlucoseMonitor/BGLBarGlucoseMonitor/BGLBarGlucoseMonitor';

var game = createGame({
    log: magikcraft.io.dixit.bind(magikcraft.io),
    effects,
    getName: () => magikcraft.io.getSender().getName(),
    getState: () => magikcraft.io.global('mct1')
});

var bar;

game.on('initialized', function(){
    bar = new BGLBarGlucoseMonitor(environment, player, 1000);
});

game.on('tick', function(time, timeScalar){
    bar.becomeGood(5);
});