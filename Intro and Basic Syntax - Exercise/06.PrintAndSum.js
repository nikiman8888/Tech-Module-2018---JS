function solve(firstNumber, secondNumber) {

    let totalSum = 0;
    let numbers = "";

    for (let i = firstNumber; i <= secondNumber ; i++) {

        totalSum += i;
        numbers += i+" ";
    }
    console.log(numbers.trim());
    console.log(`Sum: ${totalSum}`);
}
