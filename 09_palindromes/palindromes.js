const palindromes = function(str) {
    let characters = str.toLowerCase().split('').filter((char) => char.match(/\w|\d/));
    return characters.join('') === characters.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
