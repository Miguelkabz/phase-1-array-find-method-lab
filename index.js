// code your solution here
// Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined


const records = [
    { year: "2015", result: "N/A" },
    { year: "2016", result: "W" },
    { year: "2017", result: "L" },
];


function superbowlWin(records) {
    const winRecord = records.find(obj => obj.result === "W");
    
    return winRecord ? winRecord.year : undefined;

};

console.log(superbowlWin(records)); // Output: "2016"