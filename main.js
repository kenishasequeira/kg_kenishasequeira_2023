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

var args = process.argv.slice(2), len = args.length, i;

for (i = 0; i < len; i++){
    var currNum = args[i];
    console.log(currNum);
}