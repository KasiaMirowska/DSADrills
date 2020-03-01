//Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes.

//  - Input: `"Dad gave mom a Tesla as a racecar"`
//  - Output: `Dad, mom, racecar, 3 Palindromes`


// let findPalindromes =(str)=> {
//     let strArr = str.toLowerCase().split(' ')
//     let count = 0;
//     let polindromeArr = [];
//     console.log(strArr)
//     let isItPal = (str) => {
//         if(str.length === 0) {
//             return ' ';
//         }
//         console.log(str.slice(1),'/////', str[0])
//         let newWord = isItPal(str.slice(1)) + str[0]
//         return newWord
//     }
//     strArr.forEach(word => {
//         let newWord = isItPal(word)
//         if(newWord === word){
//             polindromeArr.push(newWord)
//         }
//         return polindromeArr;
//     })
//     const poliObjects = {};

//     console.log(polindromeArr)
//     polindromeArr.map(word => {
//         if (!Object.keys(poliObjects).includes(word)) {
//             poliObjects[word] = 1
//         } else {
//             poliObjects[word] = poliObjects[word] + 1;
//         }
//     });
//     console.log(poliObjects)
// }
// console.log(findPalindromes("Dad gave mom a Tesla as a racecar"))



let findPalindromes = (str) => {
    let strArr = str.toLowerCase().split(' ')
    let polindromeArr = [];
    let count = 0;
    strArr.forEach(word => {
        if (word.length >= 3) {
            let reversedWord = '';
            for (let i = word.length - 1; i >= 0; i--) {
                reversedWord += word[i];
            }
            if (reversedWord === word) {
                polindromeArr.push(reversedWord);
                count ++;
            }
        }
    });
    return polindromeArr.join(', ') + ', ' + `${count} polindromes`;
}


    console.log(findPalindromes("Dad gave mom a Tesla as a racecar"))