function sheep(num) {
   for(let i = num; i >= 0; i--) {
       if( i === 0){
           return 'All sheep jumped over fence'
       }
       console.log(i + ':'+ ' Another sheep jumps over the fence')
   }
}
console.log(sheep(4))

function calculator(num, exp) {
    if(Math.sign(exp) === -1) {
       return 'exponent should be >= 0' 
    }
    return Math.pow(num, exp)
}
console.log(calculator(3,3))

function reverseString(str){
    let newStr = [];
    let strAr = str.split('')
    console.log(strAr)
    for(i = 0; i <= str.length; i++) {
       newStr.unshift(strAr[i])
    }
    return newStr.join('')
}
console.log(reverseString('kasia'))

function triangular(num) {
    let arr = [];
    for(let i = num; i >= 0; i--) {
        arr.push(i)
    }
    return arr.reduce((a,b) => a+b)
}
console.log(triangular(6))

function stringSplit(str) {
    return [...str.split('/')]
}
console.log(stringSplit('02/02/2020'))

function fibonaci(num) {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[num]
}
console.log(fibonaci(10))
