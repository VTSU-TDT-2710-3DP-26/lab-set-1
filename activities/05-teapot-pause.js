/// <reference types="p5/global" />

import { verts, faces } from "./teapot.js";

const pe = {};
let f = 0;
let c = 0;

function pause() {
    f++;
    if (f > c) {
        f = 0;
        c++;
        throw pe;
    }
}


export async function draw(time) {
    let oldEndShape = window.endShape;
    try {
        console.log(window.endShape);
        window.endShape = function newEndShape() {
            oldEndShape();
            pause();
        }
        f = 0;
        drawWithPause(time);
        c = 0;
    } catch (e) {
        if (e == pe)
            return;
        throw e;
    } finally {
        window.endShape = oldEndShape;
    }

}


function drawWithPause(time) {

    scale(50)
    stroke(255);
    for (let face of faces) {
        fill(128)
        beginShape();
        vertex(...verts[face[0]]);
        vertex(...verts[face[1]]);
        vertex(...verts[face[2]]);
        endShape();
    }

}