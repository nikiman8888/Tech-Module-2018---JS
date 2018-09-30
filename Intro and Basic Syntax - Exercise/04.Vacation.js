function solve(peopleCoount,type, typeDay) {

    let totalSum = 0;

    switch (typeDay) {
        case "Friday":
            if(type == "Students"){
                totalSum = peopleCoount * 8.45;
                if (peopleCoount >= 30){
                    totalSum -= totalSum * 0.15;
                }

            }else if (type =="Business"){

                if (peopleCoount >= 100 ){
                    peopleCoount -= 10;
                }
                totalSum = peopleCoount * 10.90;


            }else {
                totalSum = peopleCoount * 15;
                if (peopleCoount >= 10 && peopleCoount<=20){
                    totalSum -= totalSum* 0.05;
                }
            }

            break;
        case "Saturday":
            if(type == "Students"){
                totalSum = peopleCoount * 9.80;
                if (peopleCoount >= 30){
                    totalSum -= totalSum * 0.15;
                }

            }else if (type =="Business"){

                if (peopleCoount >= 100 ){
                    peopleCoount -= 10;
                }
                totalSum = peopleCoount * 15.60;


            }else {
                totalSum = peopleCoount * 20;
                if (peopleCoount >= 10 && peopleCoount<=20){
                    totalSum -= totalSum* 0.05;
                }
            }
            break;
        case "Sunday":
            if(type == "Students"){
                totalSum = peopleCoount * 10.46;
                if (peopleCoount >= 30){
                    totalSum -= totalSum * 0.15;
                }

            }else if (type =="Business"){

                if (peopleCoount >= 100 ){
                    peopleCoount -= 10;
                }
                totalSum = peopleCoount * 16;


            }else {
                totalSum = peopleCoount * 22.50;
                if (peopleCoount >= 10 && peopleCoount<=20){
                    totalSum -= totalSum* 0.05;
                }
            }
            break;
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`);
}
