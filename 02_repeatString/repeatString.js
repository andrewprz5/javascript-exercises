const repeatString = function(string, num) {
    var text = '';
    for (let i = 0; i < num; i++) {
      text += string;
    }

    return text;
};


repeatString('hey', 10);

// Do not edit below this line
module.exports = repeatString;