
for(let i= 1; i <=10; i++) {
console.log(i);
}

//factorial n! = 1*2*3*....*n
let n =5;
let factorial = 1;
for(let i = 1; i<= n; i++){
    factorail = factorail * i;
}
console.log("Factotrial of ", n, " is", factorial)

//-------while loop----
//while (condition) {}
let count = 0;
let sum = 0;
let last = 100;

while(count <= last){
    sum =sum +count;
    count++;
}
console.log('Sum is ', sum);

//multiplication table
let num =3;
let table= [];
 
for(let i = 1; i <= 10; i++){
    table.push(num*i);
}
console.log('Table of', num, 'is' , table);