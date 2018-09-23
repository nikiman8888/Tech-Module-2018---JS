function solve(text,number) {

     let price = 0;

    if (number < 0 || number > 122){
        console.log("Error!");

    }
    else{
        switch (text) {
            case "Weekday":
                if ((number >= 0 && number <= 18) || (number > 64 && number <= 122) ){
                    price = 12;
                }
                else {
                    price = 18;
                }
                break;
            case "Weekend":
                if ((number >= 0 && number <= 18) || (number > 64 && number <= 122) ){
                    price = 15;
                }
                else {
                    price = 20;
                }
                break;
            case "Holiday":
                if ((number >= 0 && number <= 18) ){
                    price = 5;
                }
                else if (number > 18 && number <= 64){
                    price = 12;
                }
                else {
                    price = 10;
                }
                break;
        }
        console.log(`${price}$`);
    }
}
