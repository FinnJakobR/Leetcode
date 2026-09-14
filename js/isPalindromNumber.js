

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {   
    if(x < 0) return false;

    const str = String(x);


    for(let i = 0; i < Math.ceil(str.length / 2); i++) {
        if(str[i] != str[(str.length - 1) - i]) return false;
    }

    return true;

};


console.log(isPalindrome(11));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
