const Array = require('./array');


function main(){
    Array.SIZE_RATIO = 3;
    let arr = new Array();
    arr.push(15);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.push(4444);
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    
   
    // arr.push('tauhida')
    //c
   
    // console.log(arr.get(1))
    
    return arr
}

console.log(main())



function urilify(str) {
    //return str.replace(\s, '%20')
    let newStr = str.split('')
    newStr.map((el,i)=> {
        if(el === ' ') {
            newStr[i] = `%20`
        }
    })
    return newStr.join('')
}
console.log(urilify('tauhida parveen'))

function urilify2(str){
    let finalStr= '';
    for ( let i = 0; i<str.length; i++) {
        if(str[i] === ' ') {
            finalStr = finalStr + '%20';
        }
        else {
            finalStr = finalStr + str[i];
        }
    }
    return finalStr;
}
console.log(urilify2('sddff hjlk'))

function urilify3(str) {
    if(str === '') {
        return str;
    }
    if(str[0] === ' '){
        return `%20` + urilify3(str.slice(1)); //returning will stop the recursion
    }
    return str[0] + urilify3(str.slice(1))
}
console.log(urilify3('a df'))//do we have 2 iterations here?
// a + f( df)
// %20 + f(df) %20df
// d + f(f) df
// f + f('') f
// f


function filter(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] >= 5) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(filter([1,3,5,66,7,3,888,6]))

function maxSum(arr) {
    let currentSum = 0;
    let highestSum = 0;

    for(let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if(currentSum >= highestSum) {
            highestSum = currentSum;
        }
    }
    return highestSum;
}
console.log(maxSum([4, 6, -3, 5, -2, 1]), 'MAXXXXXX')


function merge(arr1, arr2){
    let mergedArr = [];
    let index1 = 0;
    let index2 = 0;
   
    for(let i=0; i < (arr1.length + arr2.length); i++){
        let unmerged1 = arr1[index1];
        let unmerged2 = arr2[index2];
        let isArr1Depleted = index1 >= arr1.length;
        let isArr2Depleted = index2 >= arr2.length;
        
        if(!isArr1Depleted && (isArr2Depleted || unmerged1 < unmerged2)) {
            mergedArr[i] = unmerged1;
            index1 ++;
        } else {
            mergedArr[i] = unmerged2;
            index2 ++;
        } 
    } 
    return mergedArr;
}
console.log(merge([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]))


function remove(str, str2) {
    let newStr;
    let remove;
    for (let i = 0; i<str.length; i++){
        remove = false;
        for(let j=0; j< str2.length; j++){
            if(str[i].toLowerCase() == str2[j]) {
               remove = true;
            }
        }
        if(remove === false) {
            newStr += str[i] ;
        }
       
    }
    return newStr;
}
console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

function product(arr) {
    let productsArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentProduct = 1;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                currentProduct = currentProduct * arr[j];
            }
        }
        productsArr.push(currentProduct);
    }
    return productsArr;
}

console.log(product([1, 3, 9, 4]));

let arr = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
];

function dimentional(arr) {
    //i'm making this in order to NOT affect an original array;
    let newArr = [];
    for (let a = 0; a<arr.length; a++) {
        newArr[a] = [];
        for (let b = 0; b < arr[a].length; b++) {
            newArr[a][b] = arr[a][b];
        }
    }
    for(let i = 0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++){
            if (arr[i][j] === 0){
                for (let k = 0; k < arr[i].length; k++ ) {
                    newArr[i][k] = 0;
                }
                for(let h = 0; h< newArr.length; h++){
                    newArr[h][j] = 0;
                }
            }
        }
        
    }
    return newArr;
}
console.log(dimentional(arr))