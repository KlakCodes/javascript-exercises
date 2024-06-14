const findTheOldest = function(people) {
    const today = new Date();

    people.forEach((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = today.getUTCFullYear();
        }
    });

    let oldPeople = people.sort((a, b) => a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1);

    return oldPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
