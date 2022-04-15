function solution(number) {
    let result = 0;
    if (number <= 0) {
        return result;
    }
    for (let index = 0; index < number; index++) {
        if (index % 3 == 0)
            result += index;
        else if (index % 5 == 0)
            result += index;
    }
    return result;
}

console.log(solution(10));