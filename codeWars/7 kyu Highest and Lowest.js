function highAndLow(numbers) {
    const numberArr = numbers.split(" ");
    let max = parseInt(numberArr[0]), min = parseInt(numberArr[0]);
    for (let index = 1; index < numberArr.length; index++) {
        const element = parseInt(numberArr[index]);
        if (max < element) {
            max = element;
        }
        if (min > element) {
            min = element;
        }
    }
    return max + " " + min;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));