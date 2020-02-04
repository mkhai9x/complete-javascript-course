console.log("Hello!!!");
var firstname = "Minh";
var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job); //undefined

/****************
 * Variable mutation and type coercion
 *
 */
console.log(
    "       *****\n     Variable mutation and type coercion\n       *****"
);

var firstname = "John";

console.log(firstname + " " + age); // it works because we have something call type coercion

var job, isMarried;
job = "teacher";
isMarried = false;
//example for type coercion
console.log(
    firstname +
    " is a " +
    age +
    " years old " +
    job +
    " .Is he married? " +
    isMarried
);
//variable mutation
age = "twenty eight";
job = "driver";
/****************
 * Basic operators
 *
 */
console.log("       *****\n     Basic operators\n       *****");
var now = 2020;
var ageJohn = 28;
var ageMark = 18;
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;
//logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); //true

//typeof operator
/****************
 * Operator precedence
 *
 */
console.log("       *****\n     Operator Precedence\n       *****");
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

/* CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

*/
console.log("       *****\n     CODING CHALLENGE1\n       *****");

var massMark = 78
var heightMark = 1.69

var massJohn = 92
var heightJohn = 1.95

var BMIMark = massMark / (heightMark * heightMark)

var BMIJohn = massJohn / (heightJohn * heightJohn)

var markHigherBMI = BMIMark > BMIJohn
console.log('Is Mark\'s BMI higher than John\'s ? ' + markHigherBMI)