// MULTI_LEVEL CONDITION
const price = 2000;
if (price >= 5000) {
    // discount 8% 
    const discount = price * 20 / 100;
    // console.log(discount);
    const payMent = price - discount;
    console.log(payMent);
}
else if (price > 2500) {
    // discount 5% 
    const discount = price * 10 / 100;
    // console.log(discount);
    const payment = price - discount;
    console.log(payment);
}
else{
  console.log(price);
}