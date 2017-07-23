import { log } from '../../util/log';
import { BGLBar } from './BGLBar';
import { T1Player } from '../../Player/T1Player';
import { GlucoseMonitor } from '../GlucoseMonitor';

export class BGLBarGlucoseMonitor extends GlucoseMonitor {
    BGLBar: BGLBar;

    constructor(player: T1Player, sampleRate: number) {
        super(player, sampleRate);
        // Pass the player's BGL in to the bar, so the bar has access to its range alerts.
        this.BGLBar = new BGLBar(this.player.BGL);
    }

    monitor() {
        // We don't need to pass in the BGL value, because the bar has a reference to the player's BGL
        log('Monitor called');
        this.BGLBar.update();
    }
}