// JavaScript source code
/* Create a List datastrcuture as  [value:1,rest;list]*/
function arrayToList(input) {
    var list = null;
    for (var count = 0; count < input.length; count++) {
        list = { value: input[i], rest: list };
    }
    return list;
}
