// problem 4;
const score = 82;
if (score > 80) {
    console.log('go for a lunch');
}
else{
   if (score >= 80 || score >= 60) {
    console.log("good luck next time");
   }
   else if (score <= 60 || score >= 40) {
        console.log(" message unseen");
    }
    else if (score < 40) {
        console.log("Sorry bro I blocked you");
    }
}