// JavaScript source code
/* Reverse a array that has the same elements in the inverse order*/
function reverseArray(input) {
    var output = [];
    for (var i = input.length - 1; i >= 0; i--) {
        output.push(input[i]);
    }
    return output;
}

//console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"];
