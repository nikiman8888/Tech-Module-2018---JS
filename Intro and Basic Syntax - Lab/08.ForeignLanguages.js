function solve(text) {

    switch (text) {
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Argentina":
        case "Mexico":
        case "Spain":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }
}
//solve("USA");