const fibonacci = function(num) {
    if(num >= 0) {
        let fibSeq = [0, 1];

        for (let i = 0; i <= num; i++) {
            if(i > 1) {
                fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
            }
        }

        return fibSeq[num];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
