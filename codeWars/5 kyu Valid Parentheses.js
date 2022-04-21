function validParentheses(parens) {
    const array = parens.split("");
    const arrChekBracet = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == '(') {
            arrChekBracet.push(element);
        } else {
            if (arrChekBracet.length != 0) {
                arrChekBracet.pop();
            } else {
                return false;
            }
        }
    }
    if (arrChekBracet.length != 0) {
        return false;
    } else {
        return true;
    }
}
console.dir(validParentheses(""));