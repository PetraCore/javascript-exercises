const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let personAge = getAge(person.yearOfBirth, person.yearOfDeath);

        return personAge > oldestAge ? person : oldest;
    });
};

const getAge = function(birth, death = new Date().getFullYear()) {
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
