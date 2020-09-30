const min = (arr = []) => {
    if (arr.length === 0) {
        return 0;
    }

    let minItem = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minItem) {
            minItem = arr[i];
        }
    }
    return minItem;
}

const max = (arr = []) => {
    if (arr.length === 0) {
        return 0;
    }

    let maxItem = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxItem) {
            minItem = arr[i];
        }
    }
    return maxItem;
}


exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
