function solve(x1,y1,x2,y2) {

    let formula = Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2);

    let distance = Math.sqrt(formula);

    console.log(distance);
}
solve(2.34, 15.66, -13.55, -2.9985);