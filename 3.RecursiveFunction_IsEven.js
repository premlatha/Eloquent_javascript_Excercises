// JavaScript source code
/* Recursive function to test whether a number is even or odd by using % 2 to check whether it’s divisible by two */
function isEven(number) {
    if (number == 0)
        return true;
    else if (number == 1)
        return false;
    else if (number < 0)
        return isEven(-number);
    else return isEven(number - 2);
}

//console.log(isEven(2));
