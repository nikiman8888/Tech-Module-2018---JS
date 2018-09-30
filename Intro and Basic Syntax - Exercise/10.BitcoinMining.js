function solve(arr) {

    let bitcoinPrice = 11949.16;
    let goldPriceGram = 67.51;
    let totalSum = 0;
    let bitcoinsCount = 0;
    let firstBuy = false;
    let firstDay = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentGold = arr[i];

        let day = i+1;

        if(day % 3 === 0){
            currentGold -= currentGold * 0.30;
        }

        let currentDaySum = currentGold * 67.51;

        totalSum += currentDaySum;

        if (totalSum >= bitcoinPrice){
            let currentBuy = Math.floor(totalSum / bitcoinPrice);//

            bitcoinsCount += currentBuy;
            totalSum -= currentBuy * bitcoinPrice;

            if (firstBuy === false){
                firstDay = day;
                firstBuy = true;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if (bitcoinsCount > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`)

}
solve([3124.15, 504.212, 2511.124]);