/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let foundChar = false;

    let wordlength = 0;

    for(let i = s.length - 1; i >= 0; --i) {

        const currentChar = s[i];
        if(!foundChar && currentChar != " ") {
            foundChar = true;
        } 
        
        if(foundChar && currentChar == " ") break;
    

        if(foundChar) {
            wordlength++;
        }
    }

    return wordlength;


};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

console.log(lengthOfLastWord("  a   "));

