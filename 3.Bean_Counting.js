// JavaScript source code
/* function countBs, which returns a number that indicates how many uppercase “B” characters are in the string*/

function countBs(string) {
    return countChar(string, "B");
}

function countChar(input, toBeCounted) {
    var count = 0;
    for (var i = 0; i < input.length; i++)
        if (input.charAt(i) == toBeCounted)
            count += 1;
    return count;
}

//console.log("ABBAACD","A");