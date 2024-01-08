const removeFromArray = function(array, ...elements) {
    const newArray = [];

    itemSearch:
    for (let item of array) {
        for (let element of elements) {
            if (item === element) {
                continue itemSearch;
            }
        }
        newArray.push(item);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
