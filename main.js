//HashMap storing text value for digits
var numberMap = new Map([
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

var args = process.argv.slice(2); //array with command line args & ignoring fist 2 args - node, main.js
var argsLen = args.length; //stores number of args
var currNum, currDigit, digitWord, tempString;

for (var i = 0; i < argsLen; i++){
    currNum = parseInt(args[i]); //arg we're working with currently
    digitWord = "", tempString = ""; //resetting strings for each iteration

    //incase currNum is Not a Number
    if (isNaN(currNum)) 
        continue;
    
    //incase we get a negative number
    if (currNum < 0) { 
        process.stdout.write("Negative");
        currNum = currNum * (-1); //absolute value
    }

    //incase we get 0 by itself
    if (currNum == 0) 
        digitWord = numberMap.get(0);

    while (currNum != 0) {
        currDigit = currNum % 10; //stores digit in the ones place
        currNum = Math.floor(currNum / 10); //removes the ones place digit
        tempString = numberMap.get(currDigit) + digitWord; //adds the digit's word conversion to previous conversions
        digitWord = tempString; //stores the latest digit to word conversion of the number
    }
    
    //write the final conversion to stdout
    process.stdout.write(digitWord);
    
    //checking if we're NOT on last number arg
    if (i < argsLen - 1) 
        process.stdout.write(","); //write comma only when we're NOT on last number arg
}