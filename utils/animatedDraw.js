const pauseException = { "pauseException": true };
let f = 0;
let c = 0;

function pause(r = 1) {
    f += r;
    if (f >= c) {
        f = 0;
        c++;
        throw pauseException;
    }
}

function smoothstep(t) {
    let s = t * t * (3 - 2 * t);
    return Math.pow(s, 2);  // increase exponent for stronger ease
}

let oldFuncs = {};
export function wrap(...funcNames) {
    for (let name of funcNames) {
        let oldFunc = window[name];
        oldFuncs[name] = oldFunc;
        switch (name) {
            case "translate":
            case "rotateX":
            case "rotateY":
            case "rotateZ":
                window[name] = function (...p) {
                    let s = 75;
                    for (let i = 0; i < s; i++) {
                        let t = smoothstep((i + 1) / s);
                        let prev = smoothstep(i / s);
                        let delta = t - prev;          // just this step's contribution
                        oldFunc(...p.map(v => v * delta));
                        pause(1);
                    }
                }
                break;

            case "scale":
                window[name] = function (...p) {
                    let s = 50;
                    for (let i = 0; i < s; i++) {
                        let t = smoothstep((i + 1) / s);
                        push();
                        oldFunc(...p.map(v => 1 + (v - 1) * t));
                        pause(1);
                        pop();
                    }
                    oldFunc(...p);
                }
                break;
            default:
                window[name] = function (...args) {
                    pause(10);
                    oldFunc(...args);
                }
                break;
        }

    }
}

export function unwrap() {
    for (const [name, f] of Object.entries(oldFuncs)) {
        window[name] = f;
    }
    oldFuncs = {};
}


export function drawWithPause(drawFunc) {
    try {
        f = 0;
        drawFunc();
        pause(100);
        c = 0;
    } catch (e) {
        if (e == pauseException)
            return;
        throw e;
    } finally {

    }
}