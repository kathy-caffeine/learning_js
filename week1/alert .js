'use strict';
function pow(){
    let a = prompt("основание степени", "");
    let b = prompt("показатель степени", "");
    let result = 1;
    for(let i = 0; i<b; i++){
        result*=a;
    }
    alert(result);
}

function getPrimes(){
    let n = prompt("Введите число", "");
    nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }
        alert( i ); // простое число
    }
}