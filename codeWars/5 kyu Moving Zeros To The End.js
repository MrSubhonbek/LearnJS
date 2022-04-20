function moveZeros(arr) {
    let counts = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 0 && typeof(arr[index]) === 'number') {
            counts.push(index);
        }
    }
    for (let index = 0; index < counts.length; index++) {
        arr.splice(counts[index] - index, 1);
    }

    for (let index = 0; index < counts.length; index++) {
        arr.push(0);
    }
    console.log(counts);
    return arr;
}
console.log(moveZeros([
    9, 0, 0, 9, 1, 2, 0,
    1, 0, 1, 0, 3, 0, 1,
    9, 0, 0, 0, 0, 9
  ]));