import { T1Player } from './Player/T1Player';

const targetTickTime = 100;

export function createGame(environment){
    environment.log(`MCT1 version ${mct1.version}`);

    var mct1 = new EventEmitter();

    function tick(mct1) {
        var now = Date.now();
        var elapsed = now - mct1.lastTick;
        var timeScalar = 1 / targetTickTime * elapsed;
        
        if(!mct1.running){
            return;
        }

        mct1.emit('tick', now, timeScalar);

        mct1.lastTick = now;
    }

    function _default() {
        if (!mct1.state.initialised) {
            initialise();
        }

        setInterval(tick.bind(null, mct1), targetTickTime);
    }

    function query() {
        environment.log(`BGL: ${mct1.T1Player.BGL.getBGL}`);
    }

    function initialise(callback?: () => void) {
        environment.log('Initialising...');
        mct1.version = '1.3.0';
        mct1.environment = environment;
        mct1.state = environment.getState();
        const player = new T1Player(mct1);
        mct1.T1Player = player;
        mct1.state.initialised = true;
        mct1.state.running = false;
        mct1.lastTick = Date.now();
        mct1.emit('initialized');
        callback && callback();
    }

    /**
     * MGK-006-compliant interface
     * See: https://github.com/Magikcraft/product-board/issues/6
     */
    return {
        _default,
        query
    };
}