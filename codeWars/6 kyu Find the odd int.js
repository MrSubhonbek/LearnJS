function findOdd(A) {
    //happy coding!
    A.sort();
    let odd;
    let count = 1;
    for (let index = 0; index < A.length; index++) {
        if (A[index] == A[index + 1]) {
            count++;
        }
        else {
            if (count % 2 === 1)
                return A[index];
            else {
                count = 1;
            }
        }
    }
    return;
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));