console.log("Named Functions as Parameters")
/* Question 1
Create a function declaration called outputName that takes one 
string parameter (nameToPrint). In the body of the function:

Create a variable called finalString
Concatenate the nameToPrint parameter with "Your name is: " 
string and assign the results to finalString variable
console.log the finalString variable
*/
console.log(`Question 1`)

function outputName(nameToPrint){
    const finalString = "Your name is: " + nameToPrint
    console.log(finalString)
}

outputName("Amanpreet")

/* Question 2
 Create a function declaration called sayMyName that takes two string
  parameters (firstName and lastName) and one function parameter 
  (printFunction). In the body of the function:

Create a variable called fullName
Concatenate the firstName and lastName parameters into a single string 
and assign it as a value of fullName. Don't forget the space between the
first name and last name!
Invoke the printFunction function passed in as a parameter, passing the 
fullName variable as an argument to it*/

console.log(`Question 2`)

function sayMyName(firstName, lastName, printFunction){
    const fullName = firstName + " " + lastName
    printFunction(fullName)
}

function printFullName(name){
    console.log(`Your name is ${name}`);
}

sayMyName('Amanpreet', 'Kaur', printFullName);
/* Question 3
Call sayMyName with your first and last name as the string arguments, 
and your outputName function as the function argument.
 */
console.log(`Question 3`)

sayMyName('Aman', 'Kaur', outputName)

/* Question 4
Call sayMyName with console.log as the function argument
*/
//Did you get what you expected as the results of each call in steps 3
 //and 4?
console.log(`Question 4`)

console.log(sayMyName('First', 'Second', outputName))



console.log("Anonymous Functions as Parameters")
/* Question 1
Use the setTimeout function to console.log a message of your choice after
2 seconds

Recall that setTimeout takes two arguments
A function to be invoked
The number of milliseconds to wait before invoking
Make the function argument of your setTimeout call an anonymous function
Put the console.log inside of the body of the anonymous function
*/
console.log(`Question 1`)

setTimeout(function (){
    console.log("Hello!! with Anonymous Function")
}, 2000)
/* Question 2
Modify the body of the anonymous function passed to setTimeout to call 
sayMyName instead of console.log after 2 seconds

You should call sayMyName in the same way you did in step 4 of the last
exercise
*/
console.log(`Question 2`)

setTimeout(function() {
    sayMyName('Amanpreet', 'Kaur', printFullName);
}, 2000);


console.log("Arrow Functions")
/* Question 1
Rewrite the previous exercise with the arrow function syntax for anonymous function
*/
console.log(`Question 1`)

setTimeout(()=> {
    console.log("Hello!! with arrow function")
}, 2000)
/*Question 2
Rewrite outputName and sayMyName functions with the arrow function syntax
 */
console.log(`Question 1`)
//Part 1
const sayMyName2 = (firstName2, lastName2, printFunction2) => {
    const fullName2 = firstName2 + " " + lastName2
    printFunction2(fullName2)
}
function printFunction2(name2){
    console.log(`Your name is ${name2}`)
}

sayMyName2('Jess', 'Kaur', printFunction2)

//Part 2
const outputName2 = (nameToPrint) => {
    const finalString = "Your name is: " + nameToPrint
    console.log(finalString)
}

outputName2("John Smith")