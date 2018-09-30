function  solve(text) {

    let temporary = "";

    for (let i = text.length-1; i >= 0; i--) {
        temporary += text[i];
    }
    console.log(temporary);
}
solve("sample");