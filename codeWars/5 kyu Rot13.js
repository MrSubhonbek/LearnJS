function rot13(message) {
    //your code here
    message = message.split("")
    let result = "";
    for (let index = 0; index < message.length; index++) {
        if (message[index].charCodeAt(0) >= 97 && message[index].charCodeAt(0) <= 122) {
            if (message[index].charCodeAt(0) > 109) {
                const dif = 12 - Math.abs(message[index].charCodeAt(0) - 122);
                result += (String.fromCharCode(97 + dif));
            } else {
                result += (String.fromCharCode(message[index].charCodeAt(0) + 13));
            }
        } else if (message[index].charCodeAt(0) >= 65 && message[index].charCodeAt(0) <= 90) {
            if (message[index].charCodeAt(0) > 77) {
                const dif = 12 - Math.abs(message[index].charCodeAt(0) - 90);
                result += (String.fromCharCode(65 + dif));
            } else {
                result += (String.fromCharCode(message[index].charCodeAt(0) + 13));
            }
        } else {
            result += message[index];
        }
    }
    return result;
}
console.log(rot13("Codewars"))
