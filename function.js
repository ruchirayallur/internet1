let sumArray = (a) => {
    sum = sum + a[i];{
}
return sum;
}

console.log(sumArray([1, 4, 6, 9]))
//check palindrome 252
//reverse a string

function reverse(str) {//ramar
let revStr = "";
for(let i = str.length  - 1;i >= 0; i--){
    revStr =revStr + str[i];
    // console.log(revStr)
}
return revStr;
}

console.log(reverse("Dayananda"))

function palindrome(n){
    let strN = ' ' +n;
    let revN = reverse(strN);
    return strN == revN; 
}
console.log(palindrome(12321))

// write a function that take a number n as input and output the list of digits of the number

function getDigits(n) {
    // Convert the number to a string
    let numStr = n.toString();

    // Split the string into individual characters (digits)
    let digits = numStr.split('').map(Number);

    // Return the array of digits
    return digits;
}

// Test the function
let number = 12345;
let result = getDigits(number);
console.log(result); // Output: [1, 2, 3, 4, 5]
