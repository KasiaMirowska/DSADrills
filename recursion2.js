let countDown = (num) => {
    if(num === 0) {
        return;
    }
    console.log(num)
    countDown(num-1);
}
console.log(countDown(15))



//recursion is useful to aterate through objects/trees:

let categories = [
    { id:'animals', parent: null},//root node
    { id:'mammals', parent: 'animals'},
    { id:'cats', parent: 'mammals'},
    { id:'dogs', parent: 'mammals'},
    { id:'chihuahua', parent: 'dogs'},
    { id:'chihuahua', parent: 'dogs'},
    { id:'labrador', parent: 'dogs'},
    { id:'persian', parent: 'cats'},
    { id:'siamese', parent: 'cats'},
]

let makeTree =(categories, parent)=>{
    let node = {};
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id))
    return node;
}
console.log(JSON.stringify(makeTree(categories, null),null, 2))


let countingSheep = (num) => {
    if(num === 0) {
        console.log('all sheep jumped over the fence')
        return num;
    }
    console.log( num + 'another sheep jumped over the fence')
    countingSheep(num-1);
}
console.log(countingSheep(8))

let powerCalculator =(num, exponent) =>{
    if(exponent < 0) {
        throw new Error('exponent should be 0 or a positive number')
    }
    if(exponent === 0) {
        return 1;
    }
    let newNum = num * powerCalculator(num, exponent -1)
    // if we have num =5 and exponent=3
    // 5 * f(5, 2) = f returns 25 -> 5*25 = 125
    // 5 * f(5, 1) = f returns 5 -> 5*5= 25
    // 5 * f(5, 0) = f returns 1 -> 5*1=5
    return newNum;
}
console.log(powerCalculator(6,3))

let reversed =(str) => {
    if(str.length === 0) {
        return '';
    }
    let newStr = reversed(str.slice(1)) + str[0]
    return newStr;
}
console.log(reversed('gigilala'))

//the 9th triangle is 9+8+7+6+5+4+3+2+1 -> 45
let triangularNum = (num) => {
    if(num === 1) {
        return 1;
    }
    return  num + triangularNum(num - 1) 
}
console.log('here', triangularNum(6))//1+2+3+4+5+6 =21

let factorialRec = (num) => {
    if(num <= 1) {
        return 1;
    }
    return num * factorialRec(num - 1)
}
console.log(factorialRec(6))
//or 
let fact= (n)=> {
    if(n>=1){
        return n * fact(n-1)
    }
    else {
        return 1;
    }
}
let fib1 = (num) => {
    if(num == 0) {
        return 0;
    }
    if(num == 1) {
        return 1;
    }
    return fib1(num-1) + fib1(num-2)
}
console.log(fib1(5), 'FIB1')
//returns a number at position num from fibonacci sequence(not index!)
let fibonacci=(num)=> {
    if(num >= 3) {
        return fibonacci(num-1) + fibonacci(num-2)
    }
    return 1;
}
console.log(fibonacci(5), 'FIB')//5th number in fibonacci sequence is 5 but it is at index 4 if fibonacci was an array

//there is num amount of stones spread 1 foot apart through the river length. Frog can jump either to one stone foot away or over 2 stones (2feet).calculate how many ways there is for the frog to cross the river
let frogJumpsWays = (num) => {
    if(num == 0 || num == 1){
      return 1;
    }
    return frogJumpsWays(num-1) + frogJumpsWays(num-2) 
    // it is fibonacci again, however , num is an index of fibonaci sequence, good explanation: https://www.youtube.com/watch?v=5o-kdjv7FD0&feature=youtu.be
    // if n=0 nWays = {[0]} n for stone
    //n=1 then nWays = {[1,0]}
    //n=2 nWays = {[2,1,0],[2,0]} (the previous ways plus an extra num for step)
    //n=3 nWays = {[3,2,1,0], [3,2,0], [3,1,0]}
    //n=4 nWays = {[4,3,2,1,0], [4,3,2,0], [4,3,1,0], [4,2,1,0], [4,2,0]}
}
console.log(frogJumpsWays(4),"FROG")
//however that solution is not efficient as the num grows (creates a binary tree where we calculating some branches(ways) twice or more hence wasteful)
//another solution
let num_ways_bottom_up = (num) => {
    if(num == 0 || num == 1){
        return 1;
      }
    let numsArr = [];
    
    numsArr[0] =1;
    numsArr[1] = 1;
    console.log(numsArr,'HER??????')
    for(let i = 2; i <= num; i++ ) {
        numsArr[i] = numsArr[i-1] + numsArr[i-2]
    }
    return numsArr[num];
}
console.log(num_ways_bottom_up(4),'BOTTOM')

//lets have the same problem with an speculation that the frog can only jump either 1, 3 or 5 stones at the time. recursive relationship is  instead of num = n(num-1) +(num -2) it would be num = (num-1)+(num-3)+(num-5) but we need to specify that n-3 or n-5 will NEVER be less then 0 or it will break

let numWays = (num) => {
    let stepOptions = [1,3,5]
    let totalWays = 0;
    if(num < 0) {
        return 0;
    } else if(num == 0) {
        return 1;
    }
    stepOptions.forEach(i => {
        totalWays += numWays(num-i)
    })
    return totalWays;
}
console.log(numWays(6))
//n=1 ways ={[1,0]}
//n=2 ways=[[2,1,0]
//n=3 ways = [[3,2,1,0], [3,0]]
//n=4 ways =[[4,3,2,1,0], [4,3,0], [4,1,0]]
//n=5 ways = [[5,4,3,2,1,0],[5,4,3,0],[5,2,1,0],[5,4,1,0],[5,0]]
//n=6 ways = [[6,5,4,3,2,1,0], [6,5,4,3,0], [6,5,4,1,0], [6,5,2,1,0], [6,3,2,1,0],[6,5,0],[6,1,0],[6,3,0]]


function anagrams(prefix, str) {
    
    if (str.length <= 1) {
    console.log(`${prefix}${str}`);
    } else {
      for (let i = 0; i < str.length; i++) {
        let currentLetter = str.substring(i, i + 1);
        let previousLetters = str.substring(0, i);
        let afterLetters = str.substring(i + 1);
        // console.log(currentLetter, '/////', previousLetters,'////////', afterLetters,'////////', prefix,'PREFIX')
        anagrams(prefix + currentLetter, previousLetters + afterLetters);
      }
    }
  }

  console.log(anagrams('', 'east'))