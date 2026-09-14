/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start


//Netwon Verfahren ist am schnellsten

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var mySqrt = function(x) {
//     let r = x;
    
//     while (r * r > x) {
//         r = Math.floor((r + x / r) / 2);
//     }

//     return r;
// };

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    let num = 0;

    while((num + 1) * (num + 1) <= x) num++;

    return num;

};

//console.log(mySqrt(4));
// @lc code=end

