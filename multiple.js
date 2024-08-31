const salary = 21000;
const isBCS  = true;
const height = 50;
const hasCar = false

// if (salary > 20000 && height > 60) {
//     console.log('su patro');
// }else{
//     console.log('onno partro khuji');
// }

if (salary > 30000 || height > 55) {
    // console.log('jao tomar biye hobe');
}
else{
    // console.log('tomar biye hove na');
}


// if (salary > 30000 || height > 55 || isBCS == true) {
//     console.log('jao tomar biye hobe');
// }
// else{
//     console.log('tomar biye hove na');
// }


// ------------ COMPLEX CONDITION ------------//

if ((salary > 30000 && hasCar == true) || isBCS == true) {
    console.log('jao tomar biye hobe');
}
else{
    console.log('tomar biye hove na');
}

if ((salary > 30000 || hasCar == true) && isBCS == true) {
    console.log('jao tomar biye hobe');
}
else{
    console.log('tomar biye hove na');
}