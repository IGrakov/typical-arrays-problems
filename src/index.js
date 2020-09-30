exports.min = function min (arr = []) {
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

exports.max = function max (arr = []) {
    if (arr.length === 0) {
        return 0;
    }

    let maxItem = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxItem) {
            maxItem = arr[i];
        }
    }
    return maxItem;
}

exports.avg = function avg (arr = []) {
    if (arr.length === 0) {
        return 0;
    }

    let sumOfItems = 0;
    for (let i = 0; i < arr.length; i++) {
            sumOfItems += arr[i];
    }
    return sumOfItems / arr.length;
}
