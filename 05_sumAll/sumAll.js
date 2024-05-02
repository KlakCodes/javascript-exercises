const sumAll = function(num1, num2) {
    let smallNum;
    let bigNum;
    let result = 0;

    if((num1 > 0 && typeof num1 === "number") && (num2 > 0 && typeof num2 === "number")) {
        if(num1 >= num2) {
            bigNum = num1;
            smallNum = num2;
        } else if(num2 > num1) {
            bigNum = num2;
            smallNum = num1;
        }
    
        for(let i = smallNum; i <= bigNum; i++) {
            result = result + i;
        }
    
        return result;
    } else {
        return result = "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
