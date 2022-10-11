const reverseString = function(string) {
    let letters = string.split("");
    let reverseText = '';
    for (let i = 1; i <= string.length; i++) {
      reverseText += '' + letters[letters.length - i];
    }
    return reverseText;
};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
