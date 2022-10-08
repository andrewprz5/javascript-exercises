
const para = document.createElement("p");
para.textContent = ' ';

const repeatString = function(string, num) {
  for (let i = 0; i < num; i++) {
    para.textContent += string;
  }

  document.body.appendChild(para);
};
  
repeatString('hey', 3);




// Do not edit below this line
module.exports = repeatString;