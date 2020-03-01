function findMode(str) {
    let numArr = str.split(',')
    const numObj = {};
    numArr.forEach(num => {
        if (numObj[num]) { 
            numObj[num] = numObj[num] + 1; 
        } else {
            numObj[num] = 1;
        }
    });
    let mode;
    let frequency = 0;
    Object.keys(numObj).map(key => { 
        if (numObj[key] > frequency) {
            mode = key;
            frequency = numObj[key];
        }
    });
    console.log(mode, frequency);

}
findMode(`1, 2, 3, 6, 10, 3, 5, 6, 3, 3`)
// 1 2 3 3 3 3 5 6 10