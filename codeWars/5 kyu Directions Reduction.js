function dirReduc(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] === "NORTH" && arr[index + 1] === "SOUTH") {
                arr.splice(index, 2);
            }
            if (arr[index] === "SOUTH" && arr[index + 1] === "NORTH") {
                arr.splice(index, 2);
            }
            if (arr[index] === "EAST" && arr[index + 1] === "WEST") {
                arr.splice(index, 2);
            }
            if (arr[index] === "WEST" && arr[index + 1] === "EAST") {
                arr.splice(index, 2);
            }
        }
    }
    return arr
}