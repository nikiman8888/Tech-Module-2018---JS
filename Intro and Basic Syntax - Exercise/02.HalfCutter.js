function solve(woodenPiece) {

    let countPieces = 0;

    while(true ){

        woodenPiece /= 2;
        countPieces++;
        if (woodenPiece < 1)
        {
            break;
        }

    }
    console.log(`Length is ${(woodenPiece.toFixed(2))} cm. after ${countPieces} cuts.`)
}
//solve(0);