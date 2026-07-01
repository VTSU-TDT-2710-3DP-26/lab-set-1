// -------------------------------------------------------
//  LET THERE BE MOVEMENTS
//
//  We'll talk this one through together....
//
// -------------------------------------------------------
export function draw(time) {

    let n = -1000;
    while (n <= 1000){
        push();

        translate(n, Math.sin(n) * 200, 0);

        sphere(30);
        pop();
        n = n + 50;
    }
}