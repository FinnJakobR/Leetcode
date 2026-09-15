/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


//Besser: Knuth-Morris-Pratt (KMP) oder Slidering Window 

//Slidering Window Algo 

// var strStr = function(haystack, needle) {
//     if (needle === "") return 0;
    
//     // Wir müssen nur bis zu dem Punkt suchen, an dem die restliche 
//     // Länge von haystack kürzer ist als die von needle
//     const limit = haystack.length - needle.length;
    
//     for (let i = 0; i <= limit; i++) {
//         // Schneide ein Stück in der Länge der Nadel heraus und vergleiche
//         if (haystack.substring(i, i + needle.length) === needle) {
//             return i;
//         }
//     }
    
//     return -1;
// };

var strStr = function(haystack, needle) {

    let cursor = 0;
    let index = 0;

    if(haystack == needle) return 0;
    if(haystack.length < needle.length) return -1;

    let start = -1;



    for (let i = 0; i < haystack.length; i++) {

        if(cursor == 0 && needle[cursor] == haystack[i]) {
            index = i;
            start = i;
        }


        if(cursor == needle.length - 1 && needle[cursor] == haystack[i]) return index;


        if(needle[cursor] == haystack[i]) {
          cursor++  
        } else {
            if(start >= 0 ) i = index;
            start = -1;
            index = 0;
            cursor = 0;
        };
    }


    index =  - 1;
    return index;

};

console.log(strStr("ppi", "pi"));
console.log(strStr("sadbutsad", "sad"));
// @lc code=end

