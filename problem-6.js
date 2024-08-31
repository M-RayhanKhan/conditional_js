// problem 6
// Ticket fare Calculator

const age = 60;
const ticketPrice = 800;

if (age < 10) {
    console.log('Children do not need to pay rent');
}
else if (age <= 22) {
    // Students get a 50% discount
    const discount = ticketPrice * 50 /  00;
    const payment = ticketPrice - discount
    console.log(payment);
}else if (age >= 60) {
    //  Senior citizens 15% Discount
    const discount = ticketPrice * 15 / 100;
    const payment = ticketPrice - discount;
    console.log(payment);
}
else{
    console.log(ticketPrice);
}