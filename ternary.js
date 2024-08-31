/**
 * TERNARY --> three parts 
 * 
 *   ? :
 * 
 * condition ? do something when true : do something when false 
 * */ 
// simple ternary oparetor
// let age = 25;
// age >= 18 ? console.log('Vot dio') : console.log('Ghumai thako');

let price = 1000;
let isLeader = true;
// if (isLeader === true) {
//     price = 0;
// }
// else{
//     price = price + 100
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 100;
// console.log(price);

// if (isLeader === true) {
//    if (price >= 1000) {
//      price = price / 2;
//      console.log(price);
//    }else{
//     price = 0;
//    }
// }
// else{
//  price = price + 100;
// }

const prices = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
console.log(prices);