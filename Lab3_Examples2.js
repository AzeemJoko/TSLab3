//Genrics
//use a type variable, a special kind of variable that works on types rather than values.
function identity(arg) {
    return arg;
}
//Arrow Functions
//Javascript function
function addition(x, y) {
    return x + y;
}
//Rewritten as an arrow function
var arrFuncRes = function (x, y) { return x + y; };
console.log(arrFuncRes(2, 3));
//Arrays
var multiArr = [[15, 23, 13], [34, 55, 6], [87, 38, 19, 110]];
console.log("What is:" + multiArr[0][2]);
console.log("What is:" + multiArr[2][0]);
console.log("What is: " + multiArr[2][3]);
/*Map Function
let singles: number[] = [1,2,3];
let doubles: number[]= singles.map(function(el)){
    return el * 2;}

    console.log("Singles array: "+singles);
    console.log("Doubles array: "+doubles);
    */
//Switch statements
//case statements can only include constants
//unless you put a break after each block of code
var theNumber = 1;
switch (theNumber) {
    case 1: {
        console.log("The Number is : 1");
        break; //exits switch
    }
    case 2: {
        console.log("The Number is : 2");
        break; //exits switch
    }
    case 3: {
        console.log("The Number is : 3");
        break; //exits switch
    }
    default: {
        console.log("Invalid number.It must be 1,2");
        break; //optional,exits anyways
    }
}
