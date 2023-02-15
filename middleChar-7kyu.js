// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


const getMiddle = (str) => {
    if (str.length % 2 === 0) {
        let indexOne = Math.floor(str.length / 2) - 1
        let indexTwo = Math.floor(str.length / 2)
        let strOne = str.split('')[indexOne]
        let strTwo = str.split('')[indexTwo]
        return strOne.concat(strTwo)
    } else {
        let index = Math.floor(str.length / 2)
        return str.split('')[index]
    }
}


console.log(getMiddle('middle'))
console.log(getMiddle('test'))