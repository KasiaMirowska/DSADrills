function sumOf(list) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1));

}

let lst = [2,4,6,8,10];
console.log(sumOf(lst));
// 2 + 28
// 4+ 24
// 6 + 18
// 8 + 10
// 10

// function f(num) {
//     if(num ===1 ) {
//         console.log(num+ 'another sheep has jumped over the fence');
//         return;
//     }
//     console.log(num + 'another sheep has jumped over the fence');
//     f(num -1);
// }

// console.log(f(3))
//i'm console loging in order to show each step or recursion with the string

function calculator(num, exp) {
     if(exp === 0) {
         return 1;
     }
     let newNum = num * calculator(num, exp-1)
     return newNum;
  
}
console.log(calculator(10, 2))
10, 2
10 * 10
10 * 1
 
function reverseString(str){
    if(str === '') {
        return str
    }
    return reverseString(str.substr(1)) + str[0]
}
console.log(reverseString('kasia'));


//the 9th triangle is 9+8+7+6+5+4+3+2+1 -> 45
function triangularNum(num) {
    if(num === 1) {
        return 1;
    }
    return  num + triangularNum(num - 1) 
}
console.log('here', triangularNum(6))


// string = 02/02/2020
// output ['02', '02','2020']

function seperator(str) {
    if(str === '') {
        return str;
    }
    if(str[0] === `/`){
        return ',' + seperator(str.slice(1));
    }
    return [str[0] + seperator(str.slice(1))]
   
}
console.log('string', seperator('02/02/2020'))

function fibonaci(num) {
    if( num === 0) {
        return 0;
    }
    if(num ===1 || num ===2) {
        return 1
    }
    return fibonaci(num - 1) + fibonaci(num - 2)
}
console.log(fibonaci(6))


function factorial(num) {
    if(num === 1) {
        return 1;
    }
    return num * factorial(num-1)
}
console.log(factorial(5))

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazePath(arr) {
    if(arr.length === 0){
        return 'e';
    }
    if(arr[0[0]] === '*' || arr[0].length === 0){
        return 'D' + maze(arr.length - 1);
    }
    


}

function binary(num) {
    if(num === 0){
        return 0;
    }
    
    if(num % 2 !== 0) {
        return 1 + binary(num-1);
    }
    if(num % 2 == 0) {
        return 0
    }

    return binary(num-1)
}
console.log(binary(3))