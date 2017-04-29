// JavaScript source code
/*Range function to Sum a range */
function Range(start, end, increment) {
    if (increment == null) increment = 1;
    var array = [];

    if (increment > 0) {
        for (var i = start; i <= end; i += increment)
            array.push(i);
    } else {
        for (var i = start; i >= end; i += increment)
            array.push(i);
    }
    return array;
}

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
        total += array[i];
    return total;
}
