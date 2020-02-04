console.log('Hello!!!')
var firstname = 'Minh'
var age = 28
var fullAge = true;
console.log(fullAge)

var job
console.log(job) //undefined

/****************
 * Variable mutation and type coercion
 * 
 */
console.log('       *****\n     Variable mutation and type coercion\n       *****')

var firstname = 'John'

console.log(firstname + ' ' + age) // it works because we have something call type coercion

var job, isMarried
job = 'teacher'
isMarried = false
//example for type coercion
console.log(firstname + ' is a ' + age + ' years old ' + job + ' .Is he married? ' + isMarried)
//variable mutation     
age = 'twenty eight'
job = 'driver'
/****************
 * Basic operators
 * 
 */
console.log('       *****\n     Basic operators\n       *****')
var now = 2020
var ageJohn = 28
var ageMark = 18
var yearJohn = now - ageJohn
var yearMark = now - ageMark
//logical operators
var johnOlder = ageJohn > ageMark
console.log(johnOlder) //true

//typeof operator
/****************
 * Operator precedence
 * 
 */
console.log('       *****\n     Operator Precedence\n       *****')
var now = 2020
var yearJohn = 1989
var fullAge = 18

var isFullAge = now - yearJohn >= fullAge
console.log(isFullAge)