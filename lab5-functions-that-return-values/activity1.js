import * as activity from "./01-sine-spheres";
import { drawGrid } from "@/utils/grid.js";
import { drawWithPause } from "@/utils/animatedDraw.js";
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
    drawWithPause(demoMode ? demo : activity.draw);
}

function demo() {
    let n = -1000;
    while (n <= 1000){
        push();
        translate(n, Math.sin(n) * 200, 0);
        sphere(30);
        pop();
        n = n + 50;
    }
}