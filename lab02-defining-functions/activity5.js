import * as activity from "./04-another-snowman";
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
    star();

    translate(0, -200, 0);

    star();
}

function star() {
    stroke(255, 255, 0);
    strokeWeight(7);
    line(0, 0, 0, -50, -50, -50);
    line(0, 0, 0, -50, -50, 50);
    line(0, 0, 0, -50, 50, -50);
    line(0, 0, 0, -50, 50, 50);
    line(0, 0, 0, 50, -50, -50);
    line(0, 0, 0, 50, -50, 50);
    line(0, 0, 0, 50, 50, -50);
    line(0, 0, 0, 50, 50, 50);

    stroke(255, 128, 0);
    line(0, 0, 0, 70, 0, 0);
    line(0, 0, 0, -70, 0, 0);
    line(0, 0, 0, 0, 70, 0);
    line(0, 0, 0, 0, -70, 0);
    line(0, 0, 0, 0, 0, 70);
    line(0, 0, 0, 0, 0, -70);

}

