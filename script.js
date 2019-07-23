"use strict";

function isNumberInRange(number){
    if(0 < number && number < 10){
        return true;
    }
    else{
    return false;
}
}
isNumberInRange(15);

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
isEven(111);

let value = +prompt('value?', '');
switch(value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 2:
        alert('2,3')
        break;
}

function min(a, b){
    if( a > b ){
    return b;
}
    return a;
}
    min(3, 5);
    min(5, -1);
