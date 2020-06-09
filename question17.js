/*****************************
* Profile Lookup
*/

// Q1: alternative logic
// Q2: test code

var contacts = [ // contacts is an array of objects representing different people in our contact list
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]},
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

console.log(Object.keys(contacts[0]));
console.log(contacts["firstName"]);
console.log(contacts.indexOf("firstName"));


// function lookUpProfile(name, prop) { 
//     /* 
//     the function should check if an actual contact's firstName
//     and the given property(prop) is a property of that contact
//     */
//    for (let i = 0; i < contacts.length; i++) {
//        if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
//            return contacts[i][prop];
//        } 
//        if (contacts[i].firstName == name && !contacts[i].hasOwnProperty(prop)) {
//            return 'No such property';
//        }
//    }
//    return 'No such contact';
// } 


function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        let current = contacts[i];
        if (current['firstName'] === name) {
            if (prop in current) {
                return current[prop];
            } else {
                return 'No such property';
            }
        }
    }
    return 'No such contact';
}

// test cases
console.log(lookUpProfile("Kristian", "lastName")); // "Vos"
console.log(lookUpProfile("Sherlock", "likes")); // ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry","likes")); // an array
console.log(lookUpProfile("Bob", "number")); // "No such contact"
console.log(lookUpProfile("Bob", "potato")); // "No such contact"
console.log(lookUpProfile("Akira", "address")); // "No such property"
