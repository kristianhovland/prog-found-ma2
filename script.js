// Question 1 
var petArray = ["cat", "cow", "dog"];

// Question 2
console.log(petArray[1]);


// Question 3
petArray.push("sheep");

// Question 4
console.log(petArray.length);

// Question 5
var catObject = {
    name: "Stunt", 
    colour: "blue", 
    age: "12",
}

// Question 6
console.log(catObject.age);

// Question 7
var catArray = ["name:Lassie", "colour:purple", "age:8"]

// Question 8
for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age); 
}

// Question 9
function loToConsole(theArgument) {
    console.log("theArgument");
}
logToConsole();

// Question 10
logToConsole("Donkey");
