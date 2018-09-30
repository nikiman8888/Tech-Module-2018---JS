function solve(number) {

    let lastDigit = number % 10;

    let arr = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight","nine"];

    console.log(arr[lastDigit]);
}
solve(1649);