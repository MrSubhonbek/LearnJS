function vowelIndices(word) {
    const chars = word.split("");
    let resultChars = [];
    for (let index = 0; index < chars.length; index++) {
        const element = chars[index];
        if (element === 'a' || element === 'A'|| element === 'y' || element === 'Y' || element === 'e' || element === 'E' || element === 'i' || element === 'I' || element === 'o' || element === 'O' || element === 'u' || element === 'U') {
            resultChars.push(index + 1);
        }
    }
    return resultChars;
}
console.log(vowelIndices('jxsbyDymiIedirvdpr'));