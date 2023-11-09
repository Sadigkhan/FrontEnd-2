function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("0 a bolmek olmaz")
    } 
    else if(typeof a==="string"||typeof b ==="string"){
        throw new Error("You can use numbers not strings stupid")
    }
    else {
        return a / b

    }
}

module.exports = {
    sum,
    subtract,
    divide
}

// getDaysDifference(new Date(2023, 8, 1), new Date(2023, 8, 10));   // 9
// getDaysDifference(new Date(2023, 8, 15), new Date(2023, 8, 20));  // 5