const reverseString = function(string) {
    const textArray = string.split("");
    let revText = "";
    
    textArray.reverse();

    for(let i =0; i < textArray.length; i++) {
        revText = revText + textArray[i];
    }

    return revText;
};

// Do not edit below this line
module.exports = reverseString;
