function anagrams(word, words) {
    const resultWords = {
        ...words
    };
    word = word.split("").sort().join("");
    for (let index = 0; index < words.length; index++) {
        words[index] = words[index].split("").sort().join("");
    }
    let arr = [];
    let index = 0
    console.log(words.indexOf(word, index));
    while (words.indexOf(word, index) != -1) {
        if (words.includes(word)) {
            arr.push(resultWords[words.indexOf(word, index)]);
            index = words.indexOf(word, index);
            console.log(words.indexOf(word, index));
        }
        index++;
    }

    return arr;
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));