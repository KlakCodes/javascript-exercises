const palindromes = function (str) {
    let arr = str.toLowerCase().replace(/\s+/g, "").split('');

    arr.forEach(char => {
        if(char.length === 1 && !char.match(/^[a-z0-9]+$/i)) {
            arr.splice(arr.indexOf(char), 1);
        }
    });

    let string = arr.join('');
    let revString = arr.reverse().join('');

    return string === revString;
};

// Do not edit below this line
module.exports = palindromes;
