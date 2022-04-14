function getCount(str) {
    var vowelsCount = 0;
    str = str.split("");
    console.log(str);
    // enter your majic here
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(getCount("abracadabra"));