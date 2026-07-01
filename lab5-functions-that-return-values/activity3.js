import * as activity from "./03-sine-snake";
import { drawGrid } from "@/utils/grid.js";
import { demoMode } from "@/utils/demoMode";

export function setup() {
    camera(300, -200, 700);
}

export function draw(t) {
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid();
    noStroke();
    if ( demoMode ){
        demo(t);
    } else {
        activity.draw(t);
    }
}

function demo(t) {
    let n = -1000;
    while (n <= 1000){
        push();
        translate(n, Math.sin(n+t) * 200, 0);
        sphere(30);
        pop();
        n = n + 50;
    }
}