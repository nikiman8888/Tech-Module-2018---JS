function solve(arr) {

    let user = arr[0];
    let password =Reverse(user) ;
    let countTyping = 0;

    for (let i = 1; i < arr.length; i++) {
        let currentPass = arr[i];
        countTyping++;
        if (countTyping == 4 && currentPass !== password){
            console.log(`User ${user} blocked!`);
            return;
        }

        if (currentPass !== password){
            console.log("Incorrect password. Try again.");
            continue;
        }
        if (currentPass === password){
            console.log(`User ${user} logged in.`);
            return;
        }
    }

    function Reverse(name) {
         let pass = "";
        for (let i = name.length - 1; i >= 0; i--) {
            pass += name[i];
        }
        return pass;
    }
}
//solve(['sunny','rainy','cloudy','sunny','not sunny']);