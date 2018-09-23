function solve(num) {

    num = num -1;
    let array = ["January","February","March","April","May", "June", "July","August","September","October", "November", "December"];

    if (num < 0 || num > 11)
    {
        console.log("Error!")
    }
    else{
        console.log(array[num]);
    }
}
//solve(13);