function solve(base,height) {

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let countSteps = 1;

    while (true )
    {

        let currentArea = base * base;

        if (base - 2 <= 0)
        {
            totalGold += base * base;
            break;
        }
        if (countSteps % 5 == 0){
            let currentLipus = (base * 2) + (2 *(base - 2));
            let currentStone = currentArea - currentLipus;

            totalStone += currentStone;
            totalLapis += currentLipus;
            countSteps++;
            base -= 2;
            continue;
        }

        let currentMarble = (base * 2) + (2 *(base - 2));
        let currentStone = currentArea - currentMarble;


        totalMarble += currentMarble;
        totalStone += currentStone;
        base -= 2;
        countSteps++;
    }

    console.log(`Stone required: ${Math .ceil(totalStone * height)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble * height)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis * height)}`);
    console.log(`Gold required: ${Math.ceil(totalGold * height)}`);
    console.log(`Final pyramid height: ${Math.floor(countSteps * height)}`);
}
//solve(12,1);