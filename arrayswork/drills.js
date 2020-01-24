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

//why getting undefined here? 
//what's the address : arr?
// also if I remove _from capasity it suddenly becomes 12, why???????
//what is ratio of pointers growing? any rules? why is it 0, 30,3,9,18,30,45?

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



function merge(arr1, arr2){
    let arr3 =[];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] > arr2[j]) {
               arr3.push(arr2[j], arr1[i])
            }
            else {
                arr3.push(arr1[i], arr2[j])
            }
        }
    } 
    return arr3;
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