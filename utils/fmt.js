// `@aabc-def:***`
const lessVariableReg = /^@\w+(\w*\-?\w*)+\w+\:/;
// `//***`
const lineCommentReg = /^\/\//;
// `***//***`
const inLineCommentReg = /\/\/.+/;

/**
 * Determine if the string prefix is Less variable
 * @param {string} str
 */
function isLessVariables(str) {
  if (str) {
    return lessVariableReg.test(str);
  } else {
    return false;
  }
}

/**
 * Determine if the line have comment
 * @param {string} str
 */
function isLineComment(str) {
  if (str) {
    return lineCommentReg.test(str);
  } else {
    return false;
  }
}

/**
 * Get the line comment
 * @param {string} str
 */
function getInLineComment(str) {
  if (inLineCommentReg.test(str)) {
    return str.match(inLineCommentReg)[0];
  } else {
    return null;
  }
}

/**
 * Get Less variable string
 * @param {string} strLine
 */
function getLessVariableName(strLine) {
  if (strLine && lessVariableReg.test(strLine)) {
    return strLine.match(lessVariableReg)[0].slice(0, -1);
  } else {
    return null;
  }
}

async function mapAsync(array, callbackfn, thisArg) {
  let result = await Promise.all(array.map(callbackfn, thisArg));

  return result;
}

module.exports = {
  isLessVariables,
  isLineComment,
  getInLineComment,
  getLessVariableName,
  mapAsync,
};
