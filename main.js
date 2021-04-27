var numberMap = new Map([ //HashMap storing text value for digits
    [0, "Zero"],
    [1, "One"],
    [2, "Two"],
    [3, "Three"],
    [4, "Four"],
    [5, "Five"],
    [6, "Six"],
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"]
]);

var args = process.argv.slice(2); //gets command line args & ignores fist 2 args - node, main.js
var argsLen = args.length, i, currNum, currDigit; //"argsLen" stores number of args

for (i = 0; i < argsLen; i++){
    currNum = args[i]; //arg we're working with currently
    while (currNum != 0) {
        currDigit = currNum % 10; //stores digit in the ones place
        currNum = Math.floor(currNum / 10); //removes the ones place digit
        // console.log("currNum: ", currNum, "currDig: ", currDigit);
    }
}