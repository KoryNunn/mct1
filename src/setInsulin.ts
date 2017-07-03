const magik = magikcraft.io;

export function setInsulin(insulin) {
    const mct1 = magik.global('mct1') as any;

    mct1.bars.insulin.setProgress(insulin);
    mct1.state.insulinOnBoard = insulin;
 }