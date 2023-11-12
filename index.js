
function suma ( num1 , num2 , num3){

    console.log(num1 + num2 + num3);
}
suma;


function resta (num1 , num2){

    console.log(num1 - num2);
}
resta(10 , 5);

function multiplicar (num1 , num2){

    console.log(num1 * num2);
}
multiplicar(5 , 2);

function division (num1 , num2){

    console.log(num1 / num2);
}
division(10,5);

function numCuadrado (num1) {
    console.log(num1 * num1);
}
numCuadrado(7);

module.exports = {suma,resta,multiplicar,division};