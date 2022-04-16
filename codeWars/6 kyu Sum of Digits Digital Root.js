function digital_root(n) {
    n = n + "";
    let result = 0;
    n = n.split("");
    n.forEach(element => {
        result+=parseInt(element);
    });
    if(result>=10){
        return digital_root(result);
    }
    return result;
  }
  console.log(digital_root(456));