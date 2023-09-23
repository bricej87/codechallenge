//Problem 1
const findSum = function (array) {
    return array.reduce(function (total, number) {
        return total + number
    });
};

//Problem 2



//Problem 3
const isPalindrome = function (str) {
    let forwardWord = str.toLowerCase();
    let backwardWord = str.toLowerCase().split("").reverse().join("");

    if forwardWord === backwardWord {
        return true;
    }

};

// Problem 4
const largestPair = function (array) {
    let products = [];

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let nextNum = array[i + 1];
        let product = currentNum * nextNum;

        if (product) {
            products.push(product);
        }

    }
    return Math.max(...products);
};

//Problem 5


//Problem 6
