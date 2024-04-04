let pill;
console.log(pill)
if (pill == 'red'){
    console.log('Reality')
} else if(pill =='blue'){
    console.log('stay in matrix')
}else{
    console.log('kill yourself.')
}

switch(pill) {
    case'red':{
        console.log('Reality');
        break;
    }
    case 'blue': {
        console.log('Stay in matrix');
         break;   
    }
    default:{
        console.log('Kill yourself');
        break;

    }
}

let number ='one';
if(number % 2 == 0) {
    console.log('Number is even ', number);
}else if (number % 2 ==1){
    console.log('Number is odd' , number);
}else {
    console.log('Invalid number');
}

let year = 2024;
if (year % 100 ==0) {
    if (year % 400 ==0) {
        console.log('Leap year', year);
    }else{
        console.log('not a leap year');
        }
}else if (year %4 ==0) {
    console.log('Leap year', year);
    }else{
        console.log('not a leap year');
        }

let marks =79;
let grade;
if(marks >= 80);{
grade = 'A';
    }elseif 
