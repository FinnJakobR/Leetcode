/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    



    let lastDigit = digits[digits.length - 1];

    lastDigit+= 1;

    if(lastDigit < 10) {

        digits[digits.length - 1] = lastDigit;
        return digits;
    } else {

        lastDigit = 0;

        digits[digits.length - 1] = lastDigit;

        let i = digits.length - 2;

        while(digits[i] == 9) {
            digits[i] = 0;
            i--;
        }

        if(i >= 0) {
            digits[i] += 1;

        } else {
            digits = [1].concat(digits);
        }

        return digits;
    
    }

};

//console.log(plusOne([6,9,9,9]))

// @lc code=end

