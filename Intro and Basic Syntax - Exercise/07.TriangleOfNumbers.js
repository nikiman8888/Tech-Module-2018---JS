function solve(number) {


    for (let i = 1; i <= number; i++) {
        let concatNumbers = "";
        for (let j = 0; j < i; j++) {
             concatNumbers += `${i} `;

        }
        console.log(concatNumbers.trim());
    }
}
