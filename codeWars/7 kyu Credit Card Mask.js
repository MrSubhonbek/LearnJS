// return masked string
function maskify(cc) {
  let temp = "";
    let res = "";

    if (cc.length >= 4)
        temp = cc[cc.length - 4];
    if (cc.length >= 3)
        temp += cc[cc.length - 3];
    if (cc.length >= 2)
        temp += cc[cc.length - 2];
    if (cc.length >= 1)
        temp += cc[cc.length - 1];
    if (cc.length >= 5)
        for (let index = 0; index < cc.length - 4; index++)
            res += '#';
    return res + temp;
}