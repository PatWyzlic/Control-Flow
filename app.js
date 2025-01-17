//Count 1 - 20 in console, Easy Going
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Even numbers 0-200, Get Even
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

//Log text 20 times, even numbers produce another text at random points, Excited Kitten
let a = 0;
let catSpeaks = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

while (a < 20) {
  let randomText = Math.floor(Math.random() * 3);
  console.log("Love me, pet me! HSSSSSS!");
  if (a % 2 == 0) {
    console.log(catSpeaks[randomText]);
  }
  a++;
}

//Fizz Buzz
let b = 1;
while (b <= 100) {
  if (b % 3 == 0 && b % 5 == 0) {
    console.log("FizzBuzz");
  } else if (b % 3 == 0) {
    console.log("Fizz");
  } else if (b % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(b);
  }
  b++;
}

//Getting to Know You
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

//Removes "Kenny" replaces with "Gameboy"
function kennyChange() {
  kenny.shift();
  kenny.unshift("GameBoy");
  console.log(kenny);
}

//Takes Jimmies age and makes him older
function jimmyYearOlder() {
  let oldAge = jimClark[1];
  let newAge = oldAge + 1;
  jimClark[1] = newAge;
  console.log(jimClark);
}

/* Makes Ryan's hometown Gotham city, 
nobody has seen him in the same room as batman and robin,
therefore he could be both
*/
function ryanTheRobinBat() {
  ryan.pop();
  ryan.push("Gotham City");
  console.log(ryan);
}

//Reuben moved to Chicago
function migrationOfReuben() {
  reuben.pop();
  reuben.push("Chicago");
  console.log(reuben);
}

//Hoff stays anywhere they want
function worldTravelorHaff() {
  jimHaff.pop();
  jimHaff.push("Gdansk", "Raleigh", "Orlando");
  console.log(jimHaff);
}

//Runs each function
function mainOperation() {
  kennyChange();
  jimmyYearOlder();
  ryanTheRobinBat();
  migrationOfReuben();
  worldTravelorHaff();
}

//Runs every function
mainOperation();

//Yell at the Ninja Turtles
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let i = 0; i < ninjaTurtles.length; i++) {
  let upperCaseNinjas = ninjaTurtles[i].toUpperCase();
  console.log(upperCaseNinjas);
}

//Return of the Closets
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//Alien Attire
let kristynsShoe = kristynsCloset.shift();
console.log(kristynsShoe);

thomsCloset[2][3] = kristynsShoe;
console.log(thomsCloset);

//Dress em up
console.log("Kristyn is wearing " + kristynsCloset[0] + ", a " + kristynsCloset[2] + " and " + kristynsCloset[3] + ".");
console.log("Thoms is wearing a " + thomsCloset[0][1] + ", a " + thomsCloset[2][1] + " and " + thomsCloset[2][2] + ".");

//Dirty Laundry
for(let i = 0; i < kristynsCloset.length; i++){
    console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

//Inventory
console.log(thomsCloset[0] + thomsCloset[1] + thomsCloset[2]);

//Multiples of 3 and 5
let numberSum = 0;
for(let i = 1; i <= 1000; i++){
    if(i % 3 == 0 || i % 5 == 0){
        let newNum = numberSum + i;
        console.log(newNum);
    }
}