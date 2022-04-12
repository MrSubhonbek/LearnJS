function filter_list(l) {
    let result = [];
      l.forEach(number => {
          if( Number.isInteger(number) || number === 0)
          result.push(number);
      });
      return result;
  }