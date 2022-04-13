function mxdiflg(a1, a2) {
    let max = -1;
    if (a1.length == 0 || a2.length == 0)
        return max;

    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            const temp = Math.abs(a1[i].length - a2[j].length);
            if (temp > max) {
                max = temp;
            }
        }
    }
    return max;
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1, s2));