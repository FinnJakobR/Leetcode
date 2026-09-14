var isOparent = function(c) {
    return c === '(';
};

var isObracket = function(c) {
    return c === '[';
};

var isOcurly = function(c) {
    return c === '{';
};

var isCparent = function(c) {
    return c === ')';
};

var isCbracket = function(c) {
    return c === ']';
};

var isCcurly = function(c) {
    return c === '}';
};


let currentIndex = 0;


var expect = function(c, s) {
    if (s[currentIndex] === c) {
        currentIndex++;
        return true;
    }

    return false;
};




var parseParent = function(s) {

    while (currentIndex < s.length) {

        let currentChar = s[currentIndex];

        if (isCparent(currentChar)) {
            currentIndex++;
            return true;
        }

        if (isCbracket(currentChar) || isCcurly(currentChar)) {
            return false;
        }

        if (isOparent(currentChar)) {
            currentIndex++;

            if (!parseParent(s)) {
                return false;
            }

            continue;
        }

        if (isObracket(currentChar)) {
            currentIndex++;

            if (!parseBracket(s)) {
                return false;
            }

            continue;
        }

        if (isOcurly(currentChar)) {
            currentIndex++;

            if (!parseCurly(s)) {
                return false;
            }

            continue;
        }

        currentIndex++;
    }

    return false;
};



var parseBracket = function(s) {

    while (currentIndex < s.length) {

        let currentChar = s[currentIndex];

        if (isCbracket(currentChar)) {
            currentIndex++;
            return true;
        }

        if (isCparent(currentChar) || isCcurly(currentChar)) {
            return false;
        }

        if (isOparent(currentChar)) {
            currentIndex++;

            if (!parseParent(s)) {
                return false;
            }

            continue;
        }

        if (isObracket(currentChar)) {
            currentIndex++;

            if (!parseBracket(s)) {
                return false;
            }

            continue;
        }

        if (isOcurly(currentChar)) {
            currentIndex++;

            if (!parseCurly(s)) {
                return false;
            }

            continue;
        }

        currentIndex++;
    }

    return false;
};


var parseCurly = function(s) {

    while (currentIndex < s.length) {

        let currentChar = s[currentIndex];

        if (isCcurly(currentChar)) {
            currentIndex++;
            return true;
        }

        if (isCparent(currentChar) || isCbracket(currentChar)) {
            return false;
        }

        if (isOparent(currentChar)) {
            currentIndex++;

            if (!parseParent(s)) {
                return false;
            }

            continue;
        }

        if (isObracket(currentChar)) {
            currentIndex++;

            if (!parseBracket(s)) {
                return false;
            }

            continue;
        }

        if (isOcurly(currentChar)) {
            currentIndex++;

            if (!parseCurly(s)) {
                return false;
            }

            continue;
        }

        currentIndex++;
    }

    return false;
};



var isValid = function(s) {

    currentIndex = 0;

    while (currentIndex < s.length) {

        let currentChar = s[currentIndex];

        if (isOparent(currentChar)) {
            currentIndex++;

            if (!parseParent(s)) {
                return false;
            }

            continue;
        }

        if (isObracket(currentChar)) {
            currentIndex++;

            if (!parseBracket(s)) {
                return false;
            }

            continue;
        }

        if (isOcurly(currentChar)) {
            currentIndex++;

            if (!parseCurly(s)) {
                return false;
            }

            continue;
        }

        if (
            isCparent(currentChar) ||
            isCbracket(currentChar) ||
            isCcurly(currentChar)
        ) {
            return false;
        }

        currentIndex++;
    }

    return true;
};
