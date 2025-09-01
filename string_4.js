// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
 
let statement = "my ex is always is X";
let result = statement.replaceAll("x", "y").replaceAll("X", "Y");

console.log(result);
