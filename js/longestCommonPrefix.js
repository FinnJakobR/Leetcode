/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
        let prefix = "";
    
        const startWord = strs[0];


        for(let j = 0; j < startWord.length; j++) {
            const currentchar = startWord[j];
            
            for(let i = 1; i < strs.length; i++) {

            if(strs[i][j] !== currentchar) return prefix;


        }
        prefix+= currentchar;


    }
        return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["", ""]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["flower", "flower", "flower"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));