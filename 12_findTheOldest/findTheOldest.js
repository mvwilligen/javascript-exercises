const findTheOldest0 = function(people) {

    let found = 0
    let age = 0

    for (i = 0; i < people.length; i++) {
        if ((people[i]["yearOfDeath"] - people[i]["yearOfBirth"]) > age) 
            {
            age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
            found = i; 
            }
    }
    
    return people[found];
};

const findTheOldest1 = function(people) {

    let found = 0
    let age = 0
    let yod = 0

    for (i = 0; i < people.length; i++) {
        yod = people[i]["yearOfDeath"];
        if (yod == undefined) { yod = 2024 }
        console.log(i, people[i]["name"],yod-people[i]["yearOfBirth"])

        if ((yod - people[i]["yearOfBirth"]) > age) 
            {

            age = yod - people[i]["yearOfBirth"];
            found = i; 
            }
    }
    
    return people[found];
};

const findTheOldest = function(people) {

    let found  = 0
    let age    = 0
    let curage = 0
    let yod    = 0

    for (i = 0; i < people.length; i++) {
        yod = people[i]["yearOfDeath"]
        if (yod = undefined) { yod=2024 }
        console.log(people[i]["name"], curage, age)
        curage = yod - people[i]["yearOfBirth"];

        if (curage > age) 
            {
            found = i; 
            age   = curage;
            }
    }
    
    return people[found];
};

const people0 = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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

  console.log(findTheOldest0(people0));

  const people1 = [
    {
      name: "Carly",
      yearOfBirth: 2018,
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

  console.log(findTheOldest1(people1));

  const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
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

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
