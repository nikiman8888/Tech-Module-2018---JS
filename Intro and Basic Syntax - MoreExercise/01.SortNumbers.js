function solve(firstNumber, secondNumber, thirdNumber) {

    let arr = [firstNumber, secondNumber, thirdNumber].sort(function (a,b){return b-a});

    console.log(arr.join(" "));
}
solve(3,1,4);