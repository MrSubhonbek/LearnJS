function spinWords(string) {
    let resultString = "";
    const staArray = string.split(" ");
    for (let index = 0; index < staArray.length; index++) {
        const element = staArray[index];
        if (element.length >= 5) {
            let reverseString = element.split("");
            reverseString = reverseString.reverse().join("");
            resultString += reverseString + " ";
        }
        else {
            resultString += element + " ";
        }
    }
    return resultString.trim();
}
console.log(spinWords("Just kidding there is still one more"));