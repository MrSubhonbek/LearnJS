const countBits = function(n) {
    // Program Me
    n = n.toString(2).split('');
    let count =0;
    for (let index = 0; index < n.length; index++) {
        if(n[index] === '1'){
            count++;
        }
        
    }
    return count;
  };
console.log(countBits(255));
