import { BGL } from '../BGL/BGL';
import { T1Player } from '../Player/T1Player';
import * as env from '../env';

export abstract class GlucoseMonitor {
    sampleRate: number;
    loop: number;
    player: T1Player;
    Interval: {set: any, clear: any};
    private _enabled: boolean;

    constructor(player: T1Player, sampleRate: number = 1000, autostart = true) {
        this.player = player;
        this.sampleRate = sampleRate;
        this._enabled = autostart;
        // Node.js vs Minecraft run-time environment
        this.Interval = (env.isNode) ?
            { set: setInterval, clear: clearInterval } :
            { set: magikcraft.io.setInterval, clear: magikcraft.io.clearInterval }
    }

    /**
     *
     * The monitor function is called every sampleRate milliseconds, and is where a
     * class extending GlucoseMonitor should do the actual monitoring side-effects,
     * such as updating a screen component, calculating and applying effects, or
     * writing to a disk or remote database.
     * @abstract
     * @param {BGL} BGL
     * @memberof GlucoseMonitor
     */
    abstract monitor(BGL: BGL): void;

    public get enabled() {
        return this._enabled;
    }

    public start() {
        this.enabled = true;
    }

    public stop() {
        this.enabled = false;
    }

    public set enabled(nowEnabled: boolean) {

        if (nowEnabled === this._enabled) {
            // No state change
            return;
        }
        this._enabled = nowEnabled;
        if (nowEnabled) {
            if (this.monitor) {
                this.loop = this.Interval.set(() => this.monitor(this.player.BGL), this.sampleRate);
                return;
            }
        } else {
            this.Interval.clear(this.loop);
        }
    }
}