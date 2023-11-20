const findTheOldest = function(arrOfObj) {

    let currAge = 0;
    let highAge = 0;
    let oldest = "";

    arrOfObj.map((person) => {
        let yearOfDeath;
        if (!person.hasOwnProperty("yearOfDeath")) {
            currAge = new Date().getFullYear() - person.yearOfBirth;
        } else {
            currAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (currAge > highAge) {
            highAge = currAge;
            oldest = person;
            console.log(`${oldest} ${highAge}`);
        }
        console.log(oldest);
    });
    return oldest;
};

const people1 = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people1).name;

// Do not edit below this line
module.exports = findTheOldest;
