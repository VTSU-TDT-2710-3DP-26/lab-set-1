// -------------------------------------------------------
//  Draw a little line star burst, then put it in a function.
//  Call that function twice with a translation in between.
//
//  How do I draw a line?
//      https://p5js.org/reference/p5/line/
//  How do I change its color?
//      https://p5js.org/reference/p5/stroke/
//  How do I change the stroke width?
//      https://p5js.org/reference/p5/strokeWeight/
// -------------------------------------------------------

export function draw(t) {

    rotateY(t*20);

    fill(200,150,50);
    solidPyramid(200, 100);

    translate(0,-300,0);

    fill("red");
    sphere(30);
    star();
}

function solidPyramid(h, w) {
    beginGeometry();
    beginShape();
    vertex(w, 0, w);
    vertex(-w, 0, w);
    vertex(-w, 0, -w);
    vertex(w, 0, -w);
    endShape();

    beginShape();
    vertex(w, 0, w);
    vertex(-w, 0, w);
    vertex(0, -h, 0);
    endShape();

    beginShape();
    vertex(-w, 0, w);
    vertex(-w, 0, -w);
    vertex(0, -h, 0);
    endShape();

    beginShape();
    vertex(-w, 0, -w);
    vertex(w, 0, -w);
    vertex(0, -h, 0);
    endShape();

    beginShape();
    vertex(w, 0, -w);
    vertex(w, 0, w);
    vertex(0, -h, 0);
    endShape();

    let g = endGeometry();

    g.computeNormals();

    model(g);
}

function pyramid(height, width) {

    stroke("purple");
    strokeWeight(7);

    line(width, 0, width, width, 0, -width);
    line(width, 0, -width, -width, 0, -width);
    line(-width, 0, -width, -width, 0, width);
    line(-width, 0, width, width, 0, width);

    line(width, 0, width, 0, -height, 0);
    line(width, 0, -width, 0, -height, 0);
    line(-width, 0, -width, 0, -height, 0);
    line(-width, 0, width, 0, -height, 0);
}

function star() {
    stroke(255, 255, 0);
    strokeWeight(4);
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