function solve(year) {

    let leap = false;

    if (year %4 == 0){
        leap = true;
    } if (year % 100 == 0){
        leap = false;
    } if(year % 400 == 0){
        leap = true;
    }
    if(leap){
        console.log("yes");
    }
    else {
        console.log("no");
    }

}
