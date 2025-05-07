// define the human Age
const humanAge = 32;
// This variable can change
let earlyDogYears = 2;
earlyDogYears *= 10.5;
// Since we already accounted for the first two years, we take myAge variable, and subtract 2 from it.
let laterDogYears = humanAge - 2;
// Calculate dog year by multiply by 4
laterDogYears *= 4;
// variable that calculate my age in dog years
let myAgeInDogYears = earlyDogYears + laterDogYears;
// string with all lowercase letters
let myName = 'camilo'.toLowerCase();

console.log(`My name is ${myName}. I am ${humanAge} years old in human years which is ${myAgeInDogYears} years old in dog years!`);


// Function to perform and make the code reusable
function calculateDogYears(humanAge) {
  let earlyDogYears = 2 * 10.5;
  let laterDogYears = (humanAge - 2) * 4;
  return earlyDogYears + laterDogYears;
}
let newAgeInDogYears = calculateDogYears(humanAge);

console.log(newAgeInDogYears);