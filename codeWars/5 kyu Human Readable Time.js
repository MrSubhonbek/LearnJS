function humanReadable(seconds) {
    let hour = parseInt(seconds / 3600);
    seconds = seconds - hour * 3600;
    let minute = parseInt(seconds / 60);
    seconds = seconds - minute * 60;
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hour + ":" + minute + ":" + seconds;
}
console.log(humanReadable(3600));