function solve(num) {

    let startNum = 1;

    let sum = 0;

    for (let i = 0; i < num; i++) {
         console.log(startNum);

         sum += startNum;

         startNum += 2;

    }
    console.log(`Sum: ${sum}`)
}
//solve(5);