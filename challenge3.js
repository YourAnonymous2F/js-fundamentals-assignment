// for loop to check whether a number is even or odd from 1-20

for (let number = 1; number <= 20; number++) {
    if (number % 2 == 0) {
        console.log (`${number} is an even number`);
    }
    else {
        console.log (`${number} is an odd number`)
    }
}

function countNumbers (numberRAnge) {
    let even = 0, odd = 0;
    for (let number = 1; number <= numberRAnge; number++) {
        if (number % 2 === 0) even ++;
            else odd++
    }        
    return `${even} even numbers, ${odd} odd numbers`
}
console.log(countNumbers(20))