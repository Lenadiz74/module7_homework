
let person = {

    city: "Moscow"

}
let student = Object.create(person);

student.ownCity = 'Moscow';

let hasProperties = (obj, prop) => (prop in obj);

console.log(hasProperties(student, 'own'));
console.log(hasProperties(student, 'ownCity'));
console.log(hasProperties(student, 'city'));