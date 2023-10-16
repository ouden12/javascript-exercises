/**
 * Array element:
 * name: "xxxx",
 * yearOfBirth: xxxx,
 * yearOfDeath: xxxx,
 */


const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => { 
        const oldestAge = getAge(oldestPerson.yearOfDeath,
                                 oldestPerson.yearOfBirth);
        const currentAge = getAge(currentPerson.yearOfDeath,
                                  currentPerson.yearOfBirth); 
        return oldestAge > currentAge ? oldestPerson
                                      : currentPerson;
    } );
}

function getAge (death, birth) {
    if(!death)
        death = new Date().getFullYear();
    return death - birth;
}

const MINEfindTheOldest = function(array) {
    let auxPerson;
    let olderAge = 0;

    for (const person of array){

        if (!person.yearOfDeath)
            person.yearOfDeath = new Date().getFullYear();

        let personAge = person.yearOfDeath - person.yearOfBirth;

        if (personAge > olderAge){
            olderAge = personAge;
            auxPerson = person;
        }
    }

    console.log("Older person is: " + auxPerson.name + ". Older age is: " + olderAge);
    return auxPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
