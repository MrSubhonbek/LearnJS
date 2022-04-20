function pigIt(str) {
    let newStr = "";
    const array = str.split(" ");
    for (let i of array) {
        let firstLetter = ""; 
        for (let j in i) {
            if (j === '0') {
                firstLetter += i[j]; 
            } else {
                newStr += i[j];
            }
        }
        newStr += firstLetter; 
        newStr += " "; 
    }
    newArray = newStr.split(" ");
    newArray.pop(); 
    let result = "" 
    for (let index of newArray) {
        if (index.length != 1) {
            result += index;
            result += "ay";
            result += " ";
        } else if (index.length == 1) {
            if (index == "?" || index == "!" || index == ".") {
                result += index;
            } else {
                result += index;
                result += "ay";
                result += " ";
            }
        }
    }
    if (result[result.length - 1] === " ") {
        result = result.slice(0, result.length - 1);
    }
    return (result);
}