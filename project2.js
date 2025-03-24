// Kate Raney
// 3/15/25

// Step 1: Your name
const myName = "Kate Raney";
const para1 = document.getElementById("p1");
para1.textContent = myName;

// Step 2: Number variables
let n1 = 8;
let n2 = 5;
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// Step 3: Multiplication
let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// Step 4: String + Number
let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

// Step 5: String * Number (NaN)
let myNameMultNum = myName * n2;
document.getElementById("p5").textContent = myNameMultNum;

// Step 6: Comparison
let myAge = 25;
let ageCompare = myAge > numberMult;
document.getElementById("p6").textContent = ageCompare;
