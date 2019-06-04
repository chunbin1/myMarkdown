/**
/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
  "(": ")",
  "[": "]",
  "{": "}"
};

var isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      if (map[s[i]]) {
        stack.push(s[i]);
      } else return false;
    } else {
      if (stack[stack.length - 1] === s[i]) {
        stack.pop();
      } else if (map[s[i]]) {
        stack.push(s[i]);
      } else return false;
    }
  }
};
