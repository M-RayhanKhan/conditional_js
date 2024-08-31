// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// problem 3
const A = 79
if (A <= 100 && A >= 90) {
    console.log("A+");
}else if (A >= 80 && A <= 89) {
    console.log("B");
}else if (A <= 79 && A >= 70) {
    console.log("C");
}else if (A <= 69 && A >= 60) {
  console.log("D");    
}else if (A <= 69 && A >= 0) {
    console.log("You are fall");
}