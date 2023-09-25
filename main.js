//Problem 1
const findSum = function (array) {
    return array.reduce(function (total, number) {
        return total + number
    });
};

//Problem 2
const findFrequency = function (array) {
    let arrayFrequence = {};

    for (let i = 0; i < array.length; i++) {
        if (arrayFrequence[array[i]]) {
            arrayFrequence[array[i]]++;
        } else {
            arrayFrequence[array[i]] = 1;
        }
    }

    let arrayValue = Object.values(arrayFrequence);
    let maxValue = Math.max(...arrayValue);
    let minValue = Math.min(...arrayValue);
    let leastFrequent = "";
    let mostFrequent = "";

    for (let key in arrayFrequence) {
        if (arrayFrequence[key] === minValue) {
            leastFrequent = `${key}`;
        } else if (arrayFrequence[key] === maxValue) {
            mostFrequent = `${key}`;
        }
    }

    return { most: `${mostFrequent}`, least: `${leastFrequent}` }

};


//Problem 3
const isPalindrome = function (str) {
    let forwardWord = str.toLowerCase();
    let backwardWord = str.toLowerCase().split("").reverse().join("");

    if (forwardWord === backwardWord) {
        return true;
    }
    else {
        return false;
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
const removeParenth = function (str) {
    let noParenth = str.replace(/\(.*?\)/g, '');
    return noParenth;
};


//Problem 6
const scoreScrabble = function (str) {
    let pointTotal = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'l' || str[i] === 'n' || str[i] === 'r' || str[i] === 's' || str[i] === 't') {
            pointTotal += 1;
        }
        else if (str[i] === 'd' || str[i] === 'g') {
            pointTotal += 2;
        }
        else if (str[i] === 'b' || str[i] === 'c' || str[i] === 'm' || str[i] === 'p') {
            pointTotal += 3;
        }
        else if (str[i] === 'f' || str[i] === 'h' || str[i] === 'v' || str[i] === 'w' || str[i] === 'y') {
            pointTotal += 4;
        }
        else if (str[i] === 'k') {
            pointTotal += 5;
        }
        else if (str[i] === 'j' || str[i] === 'k') {
            pointTotal += 8;
        }
        else if (str[i] === 'q' || 'z') {
            pointTotal += 10;
        }

    }
    return pointTotal
};
