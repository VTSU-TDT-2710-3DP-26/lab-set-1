// -------------------------------------------------------
//  Many spheres in a row.
//
//  Compare how I did this while loop with the 10-sphere
//  loop. What values does the variable named n take as
//  the loop executes?
//
//  I will lead you through a new tool, the DEBUGGER...
//
//  Now we'll talk about the Math.sin() function.
//
// -------------------------------------------------------
export function draw() {

    let n = -1000;
    while (n <= 1000){

        push();
        translate(n, 0, 0);
        sphere(30);
        pop();

        n = n + 50;
    }

}